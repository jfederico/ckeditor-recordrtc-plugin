/*

	This file is a part of CKRecordRTC project.

	Copyright (C) Jesus Federico <federico.jesus@gmail.com>

	recordrtc is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	recordrtc is distributed in the hope that it will be useful, but
	WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
	General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/


CKEDITOR.plugins.add( 'recordrtc', {
	init: function( editor ) {
		editor.addCommand( 'recordrtc', new CKEDITOR.dialogCommand( 'recordrtcDialog' ) );
		editor.ui.addButton( 'audiortc', {
			label: 'Insert audio recording',
			command: 'recordrtc',
			icon: this.path + 'images/audiortc.png'
		});
		editor.ui.addButton( 'videortc', {
			label: 'Insert video recording',
			command: 'recordrtc',
			icon: this.path + 'images/videortc.png'
		});
		editor.on( 'doubleclick', function( evt ) {
			var element = evt.data.element;
			if ( element.hasClass('recordrtc-button-plugin') ) {
				evt.data.dialog = 'recordrtcDialog';
			}
		});

		CKEDITOR.dialog.add( 'recordrtcDialog', this.path + 'dialogs/recordrtc.js' );
	}
});
