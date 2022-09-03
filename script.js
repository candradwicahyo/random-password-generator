window.onload = () => {
  
  const input = document.querySelector('.input');
  const select = document.querySelector('.select');
  
  function generate() {
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.@#$_&-+()/*"\':;!?~`|•√π÷×¶∆£¢€¥^°={}\%©®™✓[]><';
    let result = '';
    for (let i = 0; i < select.value; i++) {
      result += string[Math.floor(Math.random() * string.length)];
    }
    input.value = result;
  }
  
  generate();
  
  // generate password baru ketika tomhol generate ditekan
  const generateButton = document.querySelector('.generate');
  generateButton.addEventListener('click', generate);
  
  // salin ke clipboard
  const copyButton = document.querySelector('.copy');
  copyButton.addEventListener('click', () => {
    input.select();
    document.execCommand("copy");
    alert('password berhasil disalin!');
  });
  
}