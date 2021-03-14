function encrypt()
{
    var cipher=document.getElementById('encrypttext').value;
    document.getElementById('shr-btn').style.display="block";

if(cipher=="")
{
    document.getElementById('err').innerHTML='Text is missing';
    return false;
}
else
{
    
    
    
    
    let hash = [hash1,hash2,hash3];
    function hash1(){
      let result1 = CryptoJS.AES.encrypt("cipher","Secret Passphrase");
       document.getElementById('encrypt-box').value=result1;
    }
    function hash2(){
      let result2 = CryptoJS.MD5(cipher);
      document.getElementById('encrypt-box').value=result2;
    }
   function hash3(){
    let result3 = CryptoJS.SHA3(cipher);
    document.getElementById('encrypt-box').value=result3;
    }
 function randomNumber(n) { 
	return Math.floor( Math.random() * n ); 
  }
  hash[ randomNumber( hash.length ) ](); 
      
      
      
    
    
    
    return true;
}
}
document.getElementById("encrypt-box").onclick = function() {
    this.select();
    document.execCommand('copy');
    document.getElementById('alert').style.display="block";
    $('#alert').delay(1000).hide(0); 
  }
  

const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  shareDialog.classList.add('is-open');
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});

