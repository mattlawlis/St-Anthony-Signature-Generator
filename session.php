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
