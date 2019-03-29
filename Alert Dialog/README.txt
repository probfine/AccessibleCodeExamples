Step 1: Add Dependencies
Add alertDialog-styles.css opens in a new window in the <head> of the document

<link rel="stylesheet" type="text/css" href="alertDialog-styles.css"></li>

Add a script link to alertDialog.js opens in a new window to the bottom of the page.

<script type="text/javascript" src="alertDialog.js"></script>

Fonts: Font glyphs are required for this widget (as currently styled). The CSS file refers to them in a folder called "_fonts" as a child element of the folder in which the CSS file resides. The fonts, from the Microsoft Web Framework (MWF) are available at these links:

MWFMDL2.1.63.ttf opens in a new window
MWFMDL2.1.63.woff opens in a new window

Step 2: Add HTML
Wrap the HTML in <div class="price-wrapper">, for styling purposes.
Create a <div> container with a unique ID, and with class="dialog hidden price-wrapper".

Step 3: Add JavaScript
In your javascript, invoke the function initializeAlertDialog and pass it the ID of the container you created. This will return a function that you can call, which takes two arguments: the trigger element (which is what receives focus when the dialog is closed), and a set of configuration parameters.
Call the returned function with the following two arguments:
triggerElement: The element that was activated in order to show the dialog box.
config: An object with the following fields:
message: This is the text that you want your dialog box to contain. You can either invoke this with a string or with an HTML node (in case you want to use a form or control rendering).
title: This is the title, or label, for the dialog box. It's a normal string.
describedby: This is an optional field containing the ID of an existing element that describes the dialog box. It'll be set via aria-describedby. If both describedby and description are set, the behavior for description will override and describedby will be ignored.
description: This is an optional field used to set text for aria-describedby for screenreaders. Set this to a string value and that string will be added to a visually hidden paragraph within the dialog box, and the dialog box will reference it as a descriptor.
wrapperID: This is the ID of the wrapper div that contains the bulk of your website. If present, the element with this ID is set to aria-hidden=true when the dialog is shown, and aria-hidden=false when the dialog is dismissed. It's considered best practice to use this approach - if you don't provide a wrapper ID, you must use custom lifecycle functions in order to disable access to the rest of your page while the dialog box is visible.
lifecycle: This is an optional object used to specify a set of lifecycle functions. You can specify up to four such functions by using the following keys in the lifecycle object:
preOpen: This function will fire immediately before the dialog box is rendered.
postOpen: This function will fire immediately after the dialog box is rendered.
preClose: This function will fire immediately before the dialog box is closed.
postClose: This function will fire immediately after the dialog box is closed.
buttons: This is an array of button configurations. The buttons specified here will be attached to the buttonbar at the bottom of the dialog box. All buttons specified here will automatially close the dialog window - but you can use the button-specific preClose and postClose functions described below to trigger custom behavior that's bound to a specific button. A button configuration has the following properties:
either label or markup - if you just want the widget to draw a standard button and you just want to label it, provide the label. Alternatively, provide html markup describing the button you want (So an example label might be "Continue", while example markup might be <button id="myButtonID"> Some Text</button> ).
Optional preClose and postClose functions. preClose here will run as soon as the button is clicked, before the dialog box's primary preClose lifecycle function; postClose here will run after the whole thing is closed, after the dialog box's primary postClose lifecylce function. Use these to define custom behaviors attached to specific buttons.
An optional handleEscape: true field will ensure that pressing escape simulates clicking this button. Don't have more than one per dialog window - the first one will be used, and additional ones ignored.
showHeader: A boolean argument which determines whether the dialog's title is shown. According to the spec, a dialog may choose to include a header element which contains the label (and the dialog box points to it via aria-labelledby). If the header is not included, the label is attached directly to the dialog via aria-label.
isAlert: This is an optional boolean flag that will set the dialog's role to alertdialog if true.
isMessage: This is an optional boolean flag that specifies that the alert dialog's content is more than a simple message. For more details, see Description category details opens in a new window. If this boolean is true, then when the dialog opens the content area gets the initial focus, rather than the first button. This is always true for non-alert dialogs.