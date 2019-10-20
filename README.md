# Omni-slide-editor

Omni-slide-editor is library that made for creating slide on React web application. And this library can use with Omni slide. The website that you can store your slide for your website.

# How to use

First, you need to install Omni slide editor in your project via this command.

```
npm install omni-slide-editor # for npm
yarn add omni-slide-editor # for yarn
```

## Controller

You can display editor via Controller variable lik this.

```
import React from 'react'
import { Controller } from 'omni-slide-editor'

export default () => <Controller></Controller>
```

You can put many props to manipulate your Controller.

## Props

| props    | detail                                              | default   | type     |
| -------- | --------------------------------------------------- | --------- | -------- |
| display  | Use for changing between display mode and edit mode | undefined | Boolean  |
| onChange | Be invoked when user click submit button            | undefined | Function |
| data     | Use for setting up default slide                    | undefined | Object   |

Example

```
import React from 'react'
import { Controller } from 'omni-slide-editor'

export default () => (
	<Controller display data={/* your data */}>
	</Controller>
)
```

This code use for display your slide by putting your data and display as props
