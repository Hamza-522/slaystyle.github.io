document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.drop-down');

    dropdowns.forEach(dropdown => {
      const select = dropdown.querySelector('.select');
      const caret = dropdown.querySelector('.caret');
      const menu = dropdown.querySelector('.menu');
      const options = dropdown.querySelectorAll('.menu li');
      const selected = dropdown.querySelector('.selected'); // Adding this line to select the element with class 'selected'
  
      select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
      });
  
      options.forEach(option => {
        option.addEventListener('click', () => {
          selected.innerText = option.innerText;
          select.classList.remove('select-clicked');
          caret.classList.remove('caret-rotate');
          menu.classList.remove('menu-open');
  
          options.forEach(option => {
            option.classList.remove('active');
          });
          option.classList.add('active');
        });
      });
    });
       




    
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  





    const priceSlider = document.getElementById('price-slider');
    const priceRangeValue = document.getElementById('price-range-value');
  
    priceSlider.addEventListener('input', () => {
      const selectedValue = priceSlider.value;
      priceRangeValue.textContent = `$9.00 - $${selectedValue}`;
    });
  
    priceSlider.value = '0';
    priceRangeValue.textContent = '$9.00 - $0';
  
  
  
  
  // for change icons + to -

  
  //   END CODE
  
  
  // for check box clear button and create a button
  
  
  function handleCheckboxClick() {
    const checkboxes = document.querySelectorAll('.ks-cboxtags input[type="checkbox"]');
    let anyChecked = false;
    const filterHeading = document.querySelector('.filter-col h5');
    let clearAllButton = document.getElementById('clearAllButton');
  
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        anyChecked = true;
      }
    });
  
    if (anyChecked) {
      if (!clearAllButton) {
        clearAllButton = document.createElement('button');
        clearAllButton.textContent = 'Clear All';
        clearAllButton.className = 'btn btn-primary btn-sm mr-0';
        clearAllButton.style.backgroundColor = '#777777';
        clearAllButton.id = 'clearAllButton';
        clearAllButton.addEventListener('click', () => {
          checkboxes.forEach(checkbox => {
            checkbox.checked = false;
          });
          clearAllButton.remove();
        });
        filterHeading.insertAdjacentElement('afterend', clearAllButton);
      }
    } else if (clearAllButton) {
      clearAllButton.remove();
    }
  }
  
  // Add click event listener to each checkbox
  const checkboxes = document.querySelectorAll('.ks-cboxtags input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheckboxClick);
  });
  
  //   END CODE
  
    // Function to toggle the filter-col elements on small screens
  
  
  
    function toggleFilterCol() {
      const filterColWrapper = document.querySelector('.filter-col-wrapper');
      filterColWrapper.classList.toggle('open');
  
  
      if (window.matchMedia('(max-width: 991px)').matches) {
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');
        const filterCols = document.querySelectorAll('.filter-col.open');
  
        filterCols.forEach((filterCol) => {
          const dropdownItem = document.createElement('div');
          dropdownItem.classList.add('dropdown-item');
          dropdownItem.innerHTML = filterCol.innerHTML;
          dropdownMenu.appendChild(dropdownItem);
        });
  
        filterColWrapper.appendChild(dropdownMenu);
      }
    }
  
  
    const toggleFilterButton = document.getElementById('toggleFilterButton');
    toggleFilterButton.addEventListener('click', toggleFilterCol);
  
  
    function handleResize() {
  
      if (window.matchMedia('(min-width: 992px)').matches) {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.remove();
        }
        const filterCols = document.querySelectorAll('.filter-col');
        filterCols.forEach((filterCol) => {
          filterCol.style.display = 'block'; 
        });
      } else {
  
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.remove();
        }
        toggleFilterCol();
      }
    }
  
  
    window.addEventListener('resize', handleResize);
  
  
    handleResize();
  
  });


  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("customModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
  
    openModalBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });


  var QtyInput = (function () {
    var $qtyInputs = $(".qty-input");
  
    if (!$qtyInputs.length) {
      return;
    }
  
    var $inputs = $qtyInputs.find(".product-qty");
    var $countBtn = $qtyInputs.find(".qty-count");
    var qtyMin = parseInt($inputs.attr("min"));
    var qtyMax = parseInt($inputs.attr("max"));
  
    $inputs.change(function () {
      var $this = $(this);
      var $minusBtn = $this.siblings(".qty-count--minus");
      var $addBtn = $this.siblings(".qty-count--add");
      var qty = parseInt($this.val());
  
      if (isNaN(qty) || qty <= qtyMin) {
        $this.val(qtyMin);
        $minusBtn.attr("disabled", true);
      } else {
        $minusBtn.attr("disabled", false);
        
        if(qty >= qtyMax){
          $this.val(qtyMax);
          $addBtn.attr('disabled', true);
        } else {
          $this.val(qty);
          $addBtn.attr('disabled', false);
        }
      }
    });
  
    $countBtn.click(function () {
      var operator = this.dataset.action;
      var $this = $(this);
      var $input = $this.siblings(".product-qty");
      var qty = parseInt($input.val());
  
      if (operator == "add") {
        qty += 1;
        if (qty >= qtyMin + 1) {
          $this.siblings(".qty-count--minus").attr("disabled", false);
        }
  
        if (qty >= qtyMax) {
          $this.attr("disabled", true);
        }
      } else {
        qty = qty <= qtyMin ? qtyMin : (qty -= 1);
        
        if (qty == qtyMin) {
          $this.attr("disabled", true);
        }
  
        if (qty < qtyMax) {
          $this.siblings(".qty-count--add").attr("disabled", false);
        }
      }
  
      $input.val(qty);
    });
  })();
  

  function openModal(product) {
    const customModal = document.getElementById('customModal');
    const modalContent = customModal.querySelector('.custom-modal-content');

    // Populate the modal with product details
    modalContent.querySelector('img').src = product.image;
    modalContent.querySelector('h2').innerText = product.name;
    modalContent.querySelector('.price-con span').innerText = `${product.price}`;
    modalContent.querySelector('p').innerText = product.description;

    // Handle the modal close button
    const closeModalBtn = document.getElementById('closeModalBtn');
    closeModalBtn.addEventListener('click', () => {
      customModal.style.display = 'none';
    });

    // Show the modal
    customModal.style.display = 'block';
  }