<?php

require 'quickcli.php';

$cli = new QuickCLI\QuickCLI('Front Template Installer');

$cli->line('Welcome to ' . $cli->getAppName(), 2, 'light_cyan');

$project_name = $cli->prompt('Enter name of project (computer format, lowercase)', true);
$default_project_name = 'project';

$replace = array($default_project_name, ucfirst($default_project_name));
$with    = array($project_name, ucfirst($project_name));

$basedir = __DIR__ . '/../';

// Rename directories
rename($basedir . 'assets/src/js/Project', $basedir . 'assets/src/js/' . ucfirst($project_name));

// Rename files
rename($basedir . 'assets/src/scss/project.scss', $basedir . 'assets/src/scss/' . $project_name . '.scss');

$file_paths = array(
		$basedir . 'index.html',
		$basedir . 'Gruntfile.js',
		$basedir . 'assets/src/js/main.js',
		$basedir . 'assets/src/js/' . ucfirst($project_name) . '/App.js',
	);

foreach($file_paths as $file)
{
	file_put_contents($file, str_replace($replace, $with, file_get_contents($file)));
	$cli->line('Did "' . basename($file) . '"', 1, 'cyan');
}

$cli->line('Project data renamed from "Project" to "' . ucfirst($project_name) . '"', 2, 'green');
