// Instructors Data
const instructorsData = [
    {
        id: 1,
        name: 'Angela Yu',
        title: 'Lead Instructor & Web Developer',
        specialization: 'web',
        students: 1250000,
        courses: 12,
        rating: 4.8,
        image: 'https://ui-avatars.com/api/?name=Angela+Yu&size=200&background=6366f1&color=fff',
        bio: '12+ years of experience in web development and teaching'
    },
    {
        id: 2,
        name: 'Jose Portilla',
        title: 'Data Science Expert',
        specialization: 'data',
        students: 890000,
        courses: 8,
        rating: 4.9,
        image: 'https://ui-avatars.com/api/?name=Jose+Portilla&size=200&background=8b5cf6&color=fff',
        bio: 'Data scientist and machine learning instructor'
    },
    {
        id: 3,
        name: 'Brad Traversy',
        title: 'Full Stack Developer',
        specialization: 'web',
        students: 760000,
        courses: 15,
        rating: 4.7,
        image: 'https://ui-avatars.com/api/?name=Brad+Traversy&size=200&background=10b981&color=fff',
        bio: 'Full-stack developer with expertise in modern web technologies'
    },
    {
        id: 4,
        name: 'Daniel Walter Scott',
        title: 'Design Master',
        specialization: 'design',
        students: 540000,
        courses: 10,
        rating: 4.6,
        image: 'https://ui-avatars.com/api/?name=Daniel+Scott&size=200&background=f59e0b&color=fff',
        bio: 'Award-winning designer and Adobe Certified Instructor'
    },
    {
        id: 5,
        name: 'Sarah Smith',
        title: 'UI/UX Design Expert',
        specialization: 'design',
        students: 450000,
        courses: 9,
        rating: 4.7,
        image: 'https://ui-avatars.com/api/?name=Sarah+Smith&size=200&background=ef4444&color=fff',
        bio: 'Senior UX designer with 10+ years in product design'
    },
    {
        id: 6,
        name: 'Mike Johnson',
        title: 'Digital Marketing Strategist',
        specialization: 'business',
        students: 380000,
        courses: 7,
        rating: 4.5,
        image: 'https://ui-avatars.com/api/?name=Mike+Johnson&size=200&background=6366f1&color=fff',
        bio: 'Marketing expert helping businesses grow online'
    },
    {
        id: 7,
        name: 'Emily Chen',
        title: 'Data Science & AI Instructor',
        specialization: 'data',
        students: 620000,
        courses: 11,
        rating: 4.8,
        image: 'https://ui-avatars.com/api/?name=Emily+Chen&size=200&background=8b5cf6&color=fff',
        bio: 'PhD in Computer Science, specializing in AI and ML'
    },
    {
        id: 8,
        name: 'David Brown',
        title: 'Business Management Expert',
        specialization: 'business',
        students: 320000,
        courses: 6,
        rating: 4.4,
        image: 'https://ui-avatars.com/api/?name=David+Brown&size=200&background=10b981&color=fff',
        bio: 'MBA graduate and business consultant'
    },
    {
        id: 9,
        name: 'John Doe',
        title: 'Advanced JavaScript Developer',
        specialization: 'web',
        students: 680000,
        courses: 13,
        rating: 4.7,
        image: 'https://ui-avatars.com/api/?name=John+Doe&size=200&background=f59e0b&color=fff',
        bio: 'JavaScript expert and framework specialist'
    },
    {
        id: 10,
        name: 'Lisa Anderson',
        title: 'Graphic Design Instructor',
        specialization: 'design',
        students: 290000,
        courses: 8,
        rating: 4.6,
        image: 'https://ui-avatars.com/api/?name=Lisa+Anderson&size=200&background=ef4444&color=fff',
        bio: 'Creative director and design educator'
    },
    {
        id: 11,
        name: 'Robert Wilson',
        title: 'Python & Data Analytics',
        specialization: 'data',
        students: 510000,
        courses: 9,
        rating: 4.7,
        image: 'https://ui-avatars.com/api/?name=Robert+Wilson&size=200&background=6366f1&color=fff',
        bio: 'Data analyst and Python programming instructor'
    },
    {
        id: 12,
        name: 'Jennifer Martinez',
        title: 'Business Strategy Consultant',
        specialization: 'business',
        students: 270000,
        courses: 5,
        rating: 4.5,
        image: 'https://ui-avatars.com/api/?name=Jennifer+Martinez&size=200&background=8b5cf6&color=fff',
        bio: 'Strategic business advisor and entrepreneur'
    }
];

let filteredInstructors = [...instructorsData];
let currentPage = 1;
const instructorsPerPage = 9;

// Format number with commas
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Generate Star Rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="bi bi-star-fill text-warning"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="bi bi-star-half text-warning"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="bi bi-star text-warning"></i>';
    }
    
    return stars;
}

// Render Instructors
function renderInstructors() {
    const container = document.getElementById('instructorsContainer');
    if (!container) return;

    const start = (currentPage - 1) * instructorsPerPage;
    const end = start + instructorsPerPage;
    const instructorsToShow = filteredInstructors.slice(start, end);

    container.innerHTML = instructorsToShow.map(instructor => `
        <div class="col-md-6 col-lg-4">
            <div class="instructor-card card border-0 shadow-sm h-100">
                <div class="card-body text-center d-flex flex-column">
                    <img src="${instructor.image}" alt="${instructor.name}" class="instructor-avatar mx-auto">
                    <h5 class="fw-bold mb-1">${instructor.name}</h5>
                    <p class="text-muted small mb-2">${instructor.title}</p>
                    <div class="mb-2">
                        <span class="text-warning fw-bold me-1">${instructor.rating}</span>
                        ${generateStars(instructor.rating)}
                    </div>
                    <div class="instructor-stats">
                        <div class="instructor-stat">
                            <span class="stat-number">${formatNumber(instructor.students)}</span>
                            <span class="stat-label">Students</span>
                        </div>
                        <div class="instructor-stat">
                            <span class="stat-number">${instructor.courses}</span>
                            <span class="stat-label">Courses</span>
                        </div>
                    </div>
                    <div class="instructor-specialties mb-3">
                        <span class="specialty-badge">${getSpecializationName(instructor.specialization)}</span>
                    </div>
                    <a href="instructor-profile.html?id=${instructor.id}" class="btn btn-outline-primary btn-sm mt-auto">View Profile</a>
                </div>
            </div>
        </div>
    `).join('');

    updateInstructorCount();
    renderPagination();
}

// Get specialization name
function getSpecializationName(spec) {
    const names = {
        'web': 'Web Development',
        'design': 'Design',
        'data': 'Data Science',
        'business': 'Business'
    };
    return names[spec] || spec;
}

// Update instructor count
function updateInstructorCount() {
    const countElement = document.getElementById('instructorCount');
    if (countElement) {
        countElement.textContent = filteredInstructors.length;
    }
}

// Render Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredInstructors.length / instructorsPerPage);
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';
    
    // Previous button
    html += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;">Previous</a>
        </li>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
                </li>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }
    
    // Next button
    html += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;">Next</a>
        </li>
    `;
    
    pagination.innerHTML = html;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredInstructors.length / instructorsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderInstructors();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter Instructors
function filterInstructors() {
    const searchTerm = document.getElementById('instructorSearch')?.value.toLowerCase() || '';
    const selectedRatings = Array.from(document.querySelectorAll('.filter-rating:checked')).map(cb => parseFloat(cb.value));
    const selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
    const selectedStudentCount = document.querySelector('.filter-students:checked')?.value;

    filteredInstructors = instructorsData.filter(instructor => {
        const matchesSearch = instructor.name.toLowerCase().includes(searchTerm) || 
                            instructor.title.toLowerCase().includes(searchTerm);
        const matchesRating = selectedRatings.length === 0 || selectedRatings.some(rating => instructor.rating >= rating);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(instructor.specialization);
        const matchesStudents = !selectedStudentCount || instructor.students >= parseInt(selectedStudentCount);

        return matchesSearch && matchesRating && matchesCategory && matchesStudents;
    });

    currentPage = 1;
    sortInstructors();
}

// Sort Instructors
function sortInstructors() {
    const sortBy = document.getElementById('sortSelect')?.value || 'popular';

    switch(sortBy) {
        case 'popular':
            filteredInstructors.sort((a, b) => b.students - a.students);
            break;
        case 'rating':
            filteredInstructors.sort((a, b) => b.rating - a.rating);
            break;
        case 'students':
            filteredInstructors.sort((a, b) => b.students - a.students);
            break;
        case 'courses':
            filteredInstructors.sort((a, b) => b.courses - a.courses);
            break;
        case 'name':
            filteredInstructors.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    renderInstructors();
}

// Reset Filters
function resetFilters() {
    document.getElementById('instructorSearch').value = '';
    document.querySelectorAll('.filter-rating').forEach(cb => cb.checked = false);
    document.querySelectorAll('.filter-category').forEach(cb => cb.checked = false);
    document.querySelectorAll('.filter-students').forEach(rb => rb.checked = false);
    filterInstructors();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderInstructors();
    
    // Search functionality
    const searchInput = document.getElementById('instructorSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterInstructors);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') filterInstructors();
        });
    }

    // Filter change listeners
    document.querySelectorAll('.filter-rating, .filter-category, .filter-students').forEach(element => {
        element.addEventListener('change', filterInstructors);
    });

    // Sort change listener
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortInstructors);
    }

    // Reset filters button
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }

    // Update cart count
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
});

