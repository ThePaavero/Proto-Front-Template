/**
 * Namespaces and default initializer
 *
 * @package Project
 */

window.Project = {};

Project.App     = {};
Project.Modules = {};
Project.Helpers = {};

$(function()
{
	var app = new Project.App();
	app.init();
});
