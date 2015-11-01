# Readme Tarea 5: Web Components

## component-calculator
Example:
```
<component-calculator></component-calculator>
```
To generate

![alt text](http://s9.postimg.org/y11qcjle7/component_calculator.png)

## custom-lorem
```
<custom-lorem multiplier="10"></custom-lorem>
```
To generate

![alt text](http://s2.postimg.org/xv5hpmpuh/custom_lorem.png)

### Parameters:
Parameter | Type | Description
--------- | ---- | -------------
`multiplier` | Positive Integer | By default a maximum of 100 words are created. `multiplier` allows a maximum of `multiplier * 100` words to be created.


## parse-chart
```
<parse-chart
  parseappid="TQx8ClQ6ZX26EvYLMCfMySHL4bZ9eqdEEy0OsSjY"
  parserestapikey="84Rjgq95uNGM2bLUcOh0LkcB2KmuYxM23zkNhxVI"
  table="Tareas"
  type="bar"
  labelkey="tarea"
  valuekey="horas"
  title = "Tareas vs tiempo"
></parse-chart>
```

To generate:

![alt text](http://s9.postimg.org/ejv0jlhqn/Screen_Shot_2015_10_31_at_5_16_45_PM.png)

### Parameters:
Parameter   | Type | Description
------------|------| -------------
`parseappid` | String | Your app's Parse ID
`parserestapikey` | String | Parse REST API Key
`table` | String | The Parse class you wish to query
`type` | String | The type of chart you wish to display. Possible values are `area`, `bar`, `bubble`, `candlestick`, `column`, `combo`, `geo`, `histogram`, `line`, `pie`, `scatter`, `stepped-area`
`labelkey` | String | Column name for each datum's visual ID.
`valuekey` | String | Column name for each datum's value.
`title` | String | Chart's title
`options` | JSON Object | Directly set options for the chart. See [Google Visualization API reference (Chart Gallery)](https://google-developers.appspot.com/chart/interactive/docs/gallery) for the options available to each chart type.
