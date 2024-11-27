<?php

/**
 * @file
 * Local development override configuration feature.
 */

$lando_info = json_decode(getenv('LANDO_INFO'), TRUE);
if (!empty($lando_info)) {

  // Define this site's default database. Be sure to change database to the same identifier that
  // you use under ‘services’ in your .lando.yml file.
  $service = str_replace("sites/", "", $site_path);
  $service_config = $service;
  if($service == "default") {
    $service = "database";
  }
  $databases['default']['default'] = [
    'database' => $lando_info[$service]['creds']['database'],
    'username' => $lando_info[$service]['creds']['user'],
    'password' => $lando_info[$service]['creds']['password'],
    'host' => $service,
    'driver' => 'mysql',
    'port' => 3306
  ];

  // Trusted host pattern settings.
  $settings['trusted_host_patterns'][] = '\.lndo\.site$';
  $settings['trusted_host_patterns'][] = '.*';
  $settings['file_private_path'] = '/tmp/private-files';

  // Habilita el módulo Devel y otros módulos de desarrollo.
  $config['system.logging']['error_level'] = 'verbose';

  // Configura el renderizado en caché para estar deshabilitado.
  $settings['cache']['bins']['render'] = 'cache.backend.memory';
  $settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.memory';
  $settings['cache']['bins']['page'] = 'cache.backend.memory';

  // Desactiva la minificación y combinación de archivos CSS/JS.
  $config['system.performance']['css']['preprocess'] = FALSE;
  $config['system.performance']['js']['preprocess'] = FALSE;

  // Habilita el acceso a la barra de herramientas de Devel.
  $config['devel.settings']['devel_dumper'] = 'var_dumper';

  // Configura las opciones de twig para desarrollo.
  $settings['twig_debug'] = TRUE;
  $settings['twig_auto_reload'] = TRUE;
}