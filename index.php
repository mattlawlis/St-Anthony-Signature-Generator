<?php
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => 'stanthonyemailsignature.site',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The St. Anthony Email Signature Generator</title>
  
  <!-- Favicon -->
  <link rel="icon" href="images/SATLC-favicon.png" type="image/png">
  
  <!-- Open Graph -->
  <meta property="og:image" content="images/SATLC-email-sig-generator-opengraph.png">
  
  <!-- Bulma CSS for Layout & Form Styling -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <!-- Font Awesome (only used in input fields and mobile warning icon) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!--CSS -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Logo Image -->
        <img id="logo" src="images/SATLC-Logo-white.png" alt="SATLC Logo">
        <!-- Password Field and Enter Button inside a Form -->
        <form action="process-password.php" method="post">
            <div class="password-container">
                <input type="password" name="password" placeholder="PASSWORD" required>
                <button type="submit">ENTER</button>
            </div>
            <!-- Display Error Message if any -->
            <?php
            if (isset($_GET['error']) && $_GET['error'] == '1') {
                echo '<div class="error-message">Incorrect Password</div>';
            }
            ?>
        </form>
    </div>
</body>
</html>
