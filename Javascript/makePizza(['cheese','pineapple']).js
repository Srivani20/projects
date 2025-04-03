const myPromise = new Promise((resolve, reject) => {
           let success = true; 
       if (success) {
         resolve('Operation successful!'); 
       } else {
         reject('Something went wrong!');  
       }
     });
    
    myPromise
      .then(result => console.log(result))   
      .catch(error => console.error(error));