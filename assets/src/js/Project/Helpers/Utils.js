/**
 * Basic utility helpers
 *
 * @type {Object}
 * @package Project
 */
Project.Helpers.Utils = {

	randomBetween : function(min, max)
	{
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

};
