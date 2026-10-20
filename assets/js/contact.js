/**
 * GOURMET GRILLED CHEESE & COMFORT FOOD TRUCK - Contact & Catering Forms Validation
 * Validates Contact Form (Name, Email, Phone, Enquiry Type, Message)
 * and Event Catering Enquiry Form (Name, Email, Phone, Event Type, Date, Guests, Location).
 * Provides accessible feedback, real-time input sanitization, and toast confirmation.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    
    function setInvalid(input, errorEl, message) {
      if (input) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.setAttribute('aria-invalid', 'true');
      }
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
      }
    }

    function setValid(input, errorEl) {
      if (input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.removeAttribute('aria-invalid');
      }
      if (errorEl) {
        errorEl.style.display = 'none';
      }
    }

    // ==========================================
    // 1. GENERAL CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const phoneInput = document.getElementById('contact-phone');
      const enquiryInput = document.getElementById('contact-enquiry-type');
      const messageInput = document.getElementById('contact-message');
      const successAlert = document.getElementById('contact-success-alert');

      function validateName() {
        const val = nameInput ? nameInput.value.trim() : '';
        const errorEl = document.getElementById('contact-name-error');
        if (!val) {
          setInvalid(nameInput, errorEl, 'Please enter your full name.');
          return false;
        } else if (/\d/.test(val)) {
          setInvalid(nameInput, errorEl, 'Numbers are not allowed in name. Letters only.');
          return false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(val)) {
          setInvalid(nameInput, errorEl, 'Name cannot contain special characters. Letters only.');
          return false;
        } else if (val.length < 2) {
          setInvalid(nameInput, errorEl, 'Full name must be at least 2 characters.');
          return false;
        }
        setValid(nameInput, errorEl);
        return true;
      }

      function validateEmail() {
        const val = emailInput ? emailInput.value.trim() : '';
        const errorEl = document.getElementById('contact-email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!val) {
          setInvalid(emailInput, errorEl, 'Email address is required.');
          return false;
        } else if (!emailRegex.test(val)) {
          setInvalid(emailInput, errorEl, 'Please enter a valid email address (e.g., name@domain.com).');
          return false;
        }
        setValid(emailInput, errorEl);
        return true;
      }

      function validatePhone() {
        if (!phoneInput) return true;
        const val = phoneInput.value.trim();
        const errorEl = document.getElementById('contact-phone-error');
        if (!val) {
          if (errorEl) errorEl.style.display = 'none';
          phoneInput.classList.remove('is-invalid');
          return true;
        }
        if (!/^\d{7,15}$/.test(val)) {
          setInvalid(phoneInput, errorEl, 'Please enter a valid phone number (7 to 15 digits).');
          return false;
        }
        setValid(phoneInput, errorEl);
        return true;
      }

      function validateEnquiry() {
        const val = enquiryInput ? enquiryInput.value.trim() : '';
        const errorEl = document.getElementById('contact-enquiry-error');
        if (!val) {
          setInvalid(enquiryInput, errorEl, 'Please select an enquiry type.');
          return false;
        }
        setValid(enquiryInput, errorEl);
        return true;
      }

      function validateMessage() {
        const val = messageInput ? messageInput.value.trim() : '';
        const errorEl = document.getElementById('contact-message-error');
        if (!val) {
          setInvalid(messageInput, errorEl, 'Message is required.');
          return false;
        } else if (val.length < 10) {
          setInvalid(messageInput, errorEl, 'Please enter a message of at least 10 characters.');
          return false;
        }
        setValid(messageInput, errorEl);
        return true;
      }

      if (nameInput) {
        nameInput.addEventListener('input', function () {
          this.value = this.value.replace(/[0-9]/g, '');
        });
        nameInput.addEventListener('blur', validateName);
      }
      if (emailInput) emailInput.addEventListener('blur', validateEmail);
      if (phoneInput) {
        phoneInput.addEventListener('input', function () {
          this.value = this.value.replace(/\D/g, '');
        });
        phoneInput.addEventListener('blur', validatePhone);
      }
      if (enquiryInput) enquiryInput.addEventListener('change', validateEnquiry);
      if (messageInput) messageInput.addEventListener('blur', validateMessage);

      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isEnquiryValid = validateEnquiry();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isEnquiryValid || !isMessageValid) {
          if (window.showMeltToast) {
            window.showMeltToast('Please fill out all required fields correctly.', 'error');
          }
          return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Sending Message... ⏳';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
          if (successAlert) {
            successAlert.style.display = 'block';
            successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          if (window.showMeltToast) {
            window.showMeltToast('Message sent successfully! We will get back to you shortly.', 'success');
          }
          contactForm.reset();
          contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        }, 800);
      });
    }

    // ==========================================
    // 2. EVENT CATERING ENQUIRY FORM VALIDATION
    // ==========================================
    const cateringForm = document.getElementById('catering-quote-form');
    if (cateringForm) {
      const qName = document.getElementById('quote-name');
      const qEmail = document.getElementById('quote-email');
      const qPhone = document.getElementById('quote-phone');
      const qEventType = document.getElementById('quote-event-type');
      const qDate = document.getElementById('quote-date');
      const qGuests = document.getElementById('quote-guests');
      const qLocation = document.getElementById('quote-location');
      const qSuccess = document.getElementById('catering-success-alert');

      // Set min date to today
      if (qDate) {
        const todayStr = new Date().toISOString().split('T')[0];
        qDate.setAttribute('min', todayStr);
      }

      function valQName() {
        const val = qName ? qName.value.trim() : '';
        const errorEl = document.getElementById('quote-name-error');
        if (!val || val.length < 2) {
          setInvalid(qName, errorEl, 'Please enter your full name (letters only).');
          return false;
        }
        setValid(qName, errorEl);
        return true;
      }

      function valQEmail() {
        const val = qEmail ? qEmail.value.trim() : '';
        const errorEl = document.getElementById('quote-email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!val || !emailRegex.test(val)) {
          setInvalid(qEmail, errorEl, 'Please enter a valid email address.');
          return false;
        }
        setValid(qEmail, errorEl);
        return true;
      }

      function valQPhone() {
        const val = qPhone ? qPhone.value.trim() : '';
        const errorEl = document.getElementById('quote-phone-error');
        if (!val || !/^\d{7,15}$/.test(val)) {
          setInvalid(qPhone, errorEl, 'Please enter a valid phone number (7 to 15 digits).');
          return false;
        }
        setValid(qPhone, errorEl);
        return true;
      }

      function valQEventType() {
        const val = qEventType ? qEventType.value.trim() : '';
        const errorEl = document.getElementById('quote-event-error');
        if (!val) {
          setInvalid(qEventType, errorEl, 'Please select your event type.');
          return false;
        }
        setValid(qEventType, errorEl);
        return true;
      }

      function valQDate() {
        const val = qDate ? qDate.value.trim() : '';
        const errorEl = document.getElementById('quote-date-error');
        if (!val) {
          setInvalid(qDate, errorEl, 'Please select your preferred event date.');
          return false;
        }
        setValid(qDate, errorEl);
        return true;
      }

      function valQGuests() {
        const val = qGuests ? qGuests.value.trim() : '';
        const errorEl = document.getElementById('quote-guests-error');
        if (!val) {
          setInvalid(qGuests, errorEl, 'Please select estimated guest count.');
          return false;
        }
        setValid(qGuests, errorEl);
        return true;
      }

      function valQLocation() {
        const val = qLocation ? qLocation.value.trim() : '';
        const errorEl = document.getElementById('quote-location-error');
        if (!val || val.length < 3) {
          setInvalid(qLocation, errorEl, 'Please enter the event location or venue area.');
          return false;
        }
        setValid(qLocation, errorEl);
        return true;
      }

      if (qName) {
        qName.addEventListener('input', function () {
          this.value = this.value.replace(/[0-9]/g, '');
        });
        qName.addEventListener('blur', valQName);
      }
      if (qEmail) qEmail.addEventListener('blur', valQEmail);
      if (qPhone) {
        qPhone.addEventListener('input', function () {
          this.value = this.value.replace(/\D/g, '');
        });
        qPhone.addEventListener('blur', valQPhone);
      }
      if (qEventType) qEventType.addEventListener('change', valQEventType);
      if (qDate) qDate.addEventListener('change', valQDate);
      if (qGuests) qGuests.addEventListener('change', valQGuests);
      if (qLocation) qLocation.addEventListener('blur', valQLocation);

      cateringForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const okName = valQName();
        const okEmail = valQEmail();
        const okPhone = valQPhone();
        const okType = valQEventType();
        const okDate = valQDate();
        const okGuests = valQGuests();
        const okLoc = valQLocation();

        if (!okName || !okEmail || !okPhone || !okType || !okDate || !okGuests || !okLoc) {
          if (window.showMeltToast) {
            window.showMeltToast('Please fill out all required event details.', 'error');
          }
          return;
        }

        const submitBtn = cateringForm.querySelector('button[type="submit"]');
        const origText = submitBtn ? submitBtn.innerHTML : 'Request a Quote';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Submitting Request... ⏳';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
          }
          if (qSuccess) {
            qSuccess.style.display = 'block';
            qSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          if (window.showMeltToast) {
            window.showMeltToast('Catering request received! We will send an estimate shortly.', 'success');
          }
          cateringForm.reset();
          cateringForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        }, 800);
      });
    }

    // Auto-scroll and focus for #event-catering-section or ?booking= links
    if (window.location.hash === '#event-catering-section' || window.location.search.includes('booking=')) {
      setTimeout(() => {
        const cateringSec = document.getElementById('event-catering-section');
        if (cateringSec) {
          cateringSec.scrollIntoView({ behavior: 'smooth' });
          const dateInput = document.getElementById('quote-date');
          if (dateInput) dateInput.focus();
        }
      }, 200);
    }

  });

  // --- OUR CENTRAL HUB & CURBSIDE MAP LOCATION SWITCHER ---
  window.selectMeltMapLocation = function (loc) {
    const tabHq = document.getElementById('tab-loc-hq');
    const tabTruck = document.getElementById('tab-loc-truck');
    const cardHq = document.getElementById('card-loc-hq');
    const cardTruck = document.getElementById('card-loc-truck');
    const mapIframe = document.getElementById('melt-live-map-iframe');
    const legendDot = document.getElementById('legend-dot');
    const legendLabel = document.getElementById('legend-label');

    if (!mapIframe) return;

    if (loc === 'hq') {
      if (tabHq) {
        tabHq.classList.add('active');
        tabHq.setAttribute('aria-selected', 'true');
      }
      if (tabTruck) {
        tabTruck.classList.remove('active');
        tabTruck.setAttribute('aria-selected', 'false');
      }
      if (cardHq) cardHq.style.display = 'block';
      if (cardTruck) cardTruck.style.display = 'none';

      mapIframe.src = 'https://maps.google.com/maps?q=42+Artisan+Way+Culinary+Lane+Bengaluru+560038&t=&z=15&ie=UTF8&iwloc=&output=embed';
      mapIframe.title = 'The Melt District Central Hub & Commissary Depot Map - Bengaluru';

      if (legendDot) legendDot.className = 'legend-indicator dot-hq';
      if (legendLabel) {
        legendLabel.innerHTML = '<strong>Active View:</strong> Central Commissary Depot &amp; HQ — Bengaluru';
      }
    } else if (loc === 'truck') {
      if (tabTruck) {
        tabTruck.classList.add('active');
        tabTruck.setAttribute('aria-selected', 'true');
      }
      if (tabHq) {
        tabHq.classList.remove('active');
        tabHq.setAttribute('aria-selected', 'false');
      }
      if (cardTruck) cardTruck.style.display = 'block';
      if (cardHq) cardHq.style.display = 'none';

      mapIframe.src = 'https://maps.google.com/maps?q=Cyber+City+Hub+Sector+24&t=&z=15&ie=UTF8&iwloc=&output=embed';
      mapIframe.title = 'The Melt District Curbside Food Truck Map - Cyber City Plaza';

      if (legendDot) legendDot.className = 'legend-indicator dot-truck';
      if (legendLabel) {
        legendLabel.innerHTML = '<strong>Active View:</strong> Mobile Food Truck Curbside Stop — Cyber City';
      }
    }
  };
})();
