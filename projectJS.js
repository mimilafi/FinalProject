window.onload = function() {
    document.getElementById('generateButton').addEventListener('click', generateMealPlan);
    document.getElementById('clearButton').addEventListener('click', clearForm);
  };
  
  function generateMealPlan() {
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;
  
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var meals = {};
  
    for (var i = 0; i < daysOfWeek.length; i++) {
      var day = daysOfWeek[i];
      var mealInput = document.getElementById(day.toLowerCase());
      var meal = mealInput.value.trim();
      meals[day] = meal;
    }
  
    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Generate the meal plan web page
    var mealPlanHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${name}'s Meal Plan</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        <h1>${name}'s Meal Plan</h1>
        <h3>Personal Information:</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal for the Week:</strong> ${goal}</p>
  
        <h3>Meal Plan:</h3>
    `;
  
    for (var i = 0; i < daysOfWeek.length; i++) {
      var day = daysOfWeek[i];
      mealPlanHTML += `
        <h4>${day}</h4>
        <p><strong>Meal:</strong> ${meals[day]}</p>
        <br>
      `;
    }
  
    mealPlanHTML += `
        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `;
  
    // Open the generated meal plan in a new tab
    var mealPlanWindow = window.open();
    mealPlanWindow.document.write(mealPlanHTML);
  }
  
  function clearForm() {
    document.getElementById('mealPlan').reset();
  }
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  