// Sample data from the exercise
const data = [
  {
    title: "Section 1",
    content: "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
  },
  {
    title: "Section 2",
    content: "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
  },
  {
    title: "Section 3",
    content: "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
  },
  {
    title: "Section 4",
    content: "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
  }
];

// Create tabs and accordion from JSON data
document.addEventListener('DOMContentLoaded', () => {
  const tabList = document.getElementById('tab-list');
  const tabContent = document.getElementById('tab-content');
  const accordion = document.querySelector('.accordion');

  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .tab, .accordion-header {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    #tab-content div, .accordion div {
      transition: opacity 0.3s ease, max-height 0.3s ease;
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }
    #tab-content div.active, .accordion div.active {
      opacity: 1;
      max-height: 1000px;
    }
  `;
  document.head.appendChild(style);

  data.forEach((section, index) => {
    // Create tabs
    const tabElement = document.createElement('li');
    tabElement.textContent = section.title;
    tabElement.classList.add('tab');
    if (index === 0) tabElement.classList.add('active');
    tabList.appendChild(tabElement);

    const contentDivElement = document.createElement('div');
    contentDivElement.innerHTML = section.content;
    if (index === 0) contentDivElement.classList.add('active');
    tabContent.appendChild(contentDivElement);

    // Create accordion
    const accordionHeaderElement = document.createElement('h3');
    accordionHeaderElement.textContent = section.title;
    accordionHeaderElement.classList.add('accordion-header');
    accordion.appendChild(accordionHeaderElement);

    const accordionContentElement = document.createElement('div');
    accordionContentElement.innerHTML = section.content;
    if (index === 0) accordionContentElement.classList.add('active');
    accordion.appendChild(accordionContentElement);

    // Tab click event
    tabElement.addEventListener('click', () => {
      document.querySelectorAll('.tabs .tab').forEach(tabItem => tabItem.classList.remove('active'));
      document.querySelectorAll('#tab-content div').forEach(divElement => divElement.classList.remove('active'));
      tabElement.classList.add('active');
      contentDivElement.classList.add('active');
    });

    // Accordion click event
    accordionHeaderElement.addEventListener('click', () => {
      const isActive = accordionContentElement.classList.contains('active');
      document.querySelectorAll('.accordion div').forEach(divElement => divElement.classList.remove('active'));
      document.querySelectorAll('.accordion-header').forEach(header => header.classList.remove('active'));
      if (!isActive) {
        accordionContentElement.classList.add('active');
        accordionHeaderElement.classList.add('active');
      }
    });
  });

  // Function to check screen size and adjust visibility
  const checkScreenSize = () => {
    const isMobile = window.innerWidth <= 768;
    document.querySelector('.tabs').style.display = isMobile ? 'none' : 'block';
    document.querySelector('.accordion').style.display = isMobile ? 'block' : 'none';
  };

  // Initial check and event listener for window resize
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

