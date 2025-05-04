// Modal functionality
const modal = document.getElementById('blogModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close-btn');

// Blog content data
const blogs = {
    blog1: {
        title: "Special Day",
        content: "<p>Today marks another year of your wonderful journey through life. You've grown so much and touched so many lives...</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>"
    },
    blog2: {
        title: "Memories",
        content: "<p>Remembering all the amazing times we've shared together. From childhood adventures to adult milestones...</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>"
    },
    blog3: {
        title: "Future Wishes",
        content: "<p>As you blow out your candles, may all your wishes come true. The coming year holds so much promise and potential...</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>"
    }
};

// Add click events to all Read More buttons
document.querySelectorAll('.read-more').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const blogId = 'blog' + (index + 1);
        modalTitle.textContent = blogs[blogId].title;
        modalContent.innerHTML = blogs[blogId].content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    });
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});