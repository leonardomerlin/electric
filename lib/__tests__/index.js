'use strict';

let gulp = require('gulp');

let runSequence = require('run-sequence').use(gulp);

let registerTasks = require('../index').registerTasks;

beforeAll(() => {
	registerTasks({
		gulp: gulp
	});
});

afterAll(done => {
	runSequence('clean', function() {
		done();
	});
});

test('it should register tasks', () => {
	let tasks = gulp.tasks;

	expect(tasks.api).toBeTruthy();
	expect(tasks.build).toBeTruthy();
	expect(tasks.clean).toBeTruthy();
	expect(tasks.deploy).toBeTruthy();
	expect(tasks.metal).toBeTruthy();
	expect(tasks.server).toBeTruthy();
	expect(tasks.soyweb).toBeTruthy();
	expect(tasks.static).toBeTruthy();
	expect(tasks.styles).toBeTruthy();
	expect(tasks.vendor).toBeTruthy();
	expect(tasks.watch).toBeTruthy();
	expect(tasks['front-matter']).toBeTruthy();
});