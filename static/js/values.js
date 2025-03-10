/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Использование тура',  
    'description': '<p>Добро пожаловать в тур по <a href="https://golang.org">языку программирования Go</a>.</p>',  
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Основы',
    'description': '<p>Начальная точка, изучите все основы языка.</p><p>Объявление переменных, вызов функций и всё, что вам нужно знать перед переходом к следующим урокам.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Методы и интерфейсы',
    'description': '<p>Узнайте, как определять методы для типов, как объявлять интерфейсы и как всё это объединить.</p>',
    'lessons': ['methods']
}, {
    'id': 'generics',
    'title': 'Дженерики',
    'description': '<p>Узнайте, как использовать параметры типов в функциях и структурах Go.</p>',
    'lessons': ['generics']
}, {
    'id': 'concurrency',
    'title': 'Параллелизм',
    'description': '<p>Go предоставляет возможности параллелизма как часть основного языка.</p><p>Этот модуль рассматривает горутины и каналы, а также то, как они используются для реализации различных паттернов параллелизма.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'off',
    'on': 'on',
    'syntax': 'Syntax-Highlighting',
    'lineno': 'Line-Numbers',
    'reset': 'Reset Slide',
    'format': 'Format Source Code',
    'kill': 'Kill Program',
    'run': 'Run',
    'compile': 'Compile and Run',
    'more': 'Options',
    'toc': 'Table of Contents',
    'prev': 'Previous',
    'next': 'Next',
    'waiting': 'Waiting for remote server...',
    'errcomm': 'Error communicating with remote server.',
    'submit-feedback': 'Send feedback about this page',

    // GitHub issue template: update repo and messaging when translating.
    'github-repo': 'github.com/golang/tour',
    'issue-title': 'tour: [REPLACE WITH SHORT DESCRIPTION]',
    'issue-message': 'Change the title above to describe your issue and add your feedback here, including code if necessary',
    'context': 'Context',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
}).

// mapping from the old paths (#42) to the new organization.
// The values have been generated with the map.sh script in the tools directory.
value('mapping', {
    '#1': '/welcome/1', // Hello, 世界
    '#2': '/welcome/2', // Go local
    '#3': '/basics/1', // Packages
    '#4': '/basics/2', // Imports
    '#5': '/basics/3', // Exported names
    '#6': '/basics/4', // Functions
    '#7': '/basics/5', // Functions continued
    '#8': '/basics/6', // Multiple results
    '#9': undefined, // Named results
    '#10': '/basics/8', // Variables
    '#11': '/basics/9', // Variables with initializers
    '#12': '/basics/10', // Short variable declarations
    '#13': '/basics/11', // Basic types
    '#14': '/basics/13', // Type conversions
    '#15': '/basics/15', // Constants
    '#16': '/basics/16', // Numeric Constants
    '#17': '/flowcontrol/1', // For
    '#18': '/flowcontrol/2', // For continued
    '#19': '/flowcontrol/3', // For is Go's "while"
    '#20': '/flowcontrol/4', // Forever
    '#21': '/flowcontrol/5', // If
    '#22': '/flowcontrol/6', // If with a short statement
    '#23': '/flowcontrol/7', // If and else
    '#24': '/flowcontrol/8', // Exercise: Loops and Functions
    '#25': '/moretypes/2', // Structs
    '#26': '/moretypes/3', // Struct Fields
    '#27': '/moretypes/1', // Pointers
    '#28': '/moretypes/5', // Struct Literals
    '#29': undefined, // The new function
    '#30': '/moretypes/6', // Arrays
    '#31': '/moretypes/7', // Slices
    '#32': undefined, // Slicing slices
    '#33': undefined, // Making slices
    '#34': '/moretypes/12', // Nil slices
    '#35': '/moretypes/16', // Range
    '#36': '/moretypes/17', // Range continued
    '#37': '/moretypes/18', // Exercise: Slices
    '#38': '/moretypes/19', // Maps
    '#39': '/moretypes/20', // Map literals
    '#40': '/moretypes/21', // Map literals continued
    '#41': '/moretypes/22', // Mutating Maps
    '#42': '/moretypes/23', // Exercise: Maps
    '#43': '/moretypes/24', // Function values
    '#44': '/moretypes/25', // Function closures
    '#45': '/moretypes/26', // Exercise: Fibonacci closure
    '#46': '/flowcontrol/9', // Switch
    '#47': '/flowcontrol/10', // Switch evaluation order
    '#48': '/flowcontrol/11', // Switch with no condition
    '#49': undefined, // Advanced Exercise: Complex cube roots
    '#50': undefined, // Methods and Interfaces
    '#51': '/methods/1', // Methods
    '#52': '/methods/3', // Methods continued
    '#53': undefined, // Methods with pointer receivers
    '#54': '/methods/9', // Interfaces
    '#55': undefined, // Interfaces are satisfied implicitly
    '#56': '/methods/19', // Errors
    '#57': '/methods/20', // Exercise: Errors
    '#58': undefined, // Web servers
    '#59': undefined, // Exercise: HTTP Handlers
    '#60': '/methods/24', // Images
    '#61': '/methods/25', // Exercise: Images
    '#62': undefined, // Exercise: Rot13 Reader
    '#63': undefined, // Concurrency
    '#64': '/concurrency/1', // Goroutines
    '#65': '/concurrency/2', // Channels
    '#66': '/concurrency/3', // Buffered Channels
    '#67': '/concurrency/4', // Range and Close
    '#68': '/concurrency/5', // Select
    '#69': '/concurrency/6', // Default Selection multiple matches found for Exercise: Equivalent Binary Trees; find 'CHOOSE BETWEEN' in the output
    '#70': '/concurrency/CHOOSE BETWEEN 7 8', // Exercise: Equivalent Binary Trees multiple matches found for Exercise: Equivalent Binary Trees; find 'CHOOSE BETWEEN' in the output
    '#71': '/concurrency/CHOOSE BETWEEN 7 8', // Exercise: Equivalent Binary Trees
    '#72': '/concurrency/10', // Exercise: Web Crawler
    '#73': '/concurrency/11', // Where to Go from here...
});
