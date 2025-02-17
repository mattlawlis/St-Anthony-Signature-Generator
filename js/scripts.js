(function(w) {
  const doc = w.document;
  const form = doc.getElementById('form');
  const copyBtn = doc.getElementById('copyBtn');

  // Preview Elements
  const previewName = doc.getElementById('preview_name');
  const previewTitle = doc.getElementById('preview_title');
  const previewMobile = doc.getElementById('preview_mobile');

  // Form Inputs
  const inputFirstName = doc.getElementById('first_name');
  const inputLastName = doc.getElementById('last_name');
  const inputTitle = doc.getElementById('title');
  const inputCell = doc.getElementById('cell');

  // Format phone number to pattern 123.456.7890
  function formatPhoneNumber(input) {
    let digits = input.replace(/\D/g, '');
    if (digits.length === 10) {
      return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3');
    }
    return input;
  }

  // Update the signature preview using the form values (uppercase everything)
  function updatePreview() {
    const firstName = (inputFirstName.value.trim() || "FIRST NAME").toUpperCase();
    const lastName = (inputLastName.value.trim() || "LAST NAME").toUpperCase();
    previewName.innerHTML = `${firstName}<br>${lastName}`;

    previewTitle.textContent = (inputTitle.value.trim() || "TITLE").toUpperCase();

    const rawCell = inputCell.value.trim() || "0000000000";
    previewMobile.textContent = formatPhoneNumber(rawCell);
  }

  // Listen to changes in the form and update preview
  form.addEventListener('input', updatePreview);

  // Copy the preview to clipboard
  copyBtn.addEventListener('click', function() {
    const signatureContainer = doc.getElementById('signature_container');
    const range = doc.createRange();
    range.selectNodeContents(signatureContainer);

    const selection = w.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      const successful = doc.execCommand('copy');
      alert(successful ? 'Signature copied to clipboard!' : 'Failed to copy signature.');
    } catch (err) {
      alert('Browser does not support copying.');
    }

    // Deselect
    selection.removeAllRanges();
  });

  // Initialize preview on page load
  doc.addEventListener('DOMContentLoaded', updatePreview);
})(window);
