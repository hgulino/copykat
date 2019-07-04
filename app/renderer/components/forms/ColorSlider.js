import React from 'react'
import { Grid } from '@material-ui/core'
import { CustomPicker } from 'react-color'
var { Hue } = require('react-color/lib/components/common')
import ProjectCardDemo from '../cards/ProjectCardDemo'

const SliderPointer = (props) => {
  return (
    <div
      style={{
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '2px white solid',
        transform: 'translate(-5px, -5px)',
        backgroundColor: props.color,
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        cursor: 'pointer',
      }}
    />
  )
}

class MyColorPicker extends React.Component {
  render() {
    return (
      <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item xs={1}>
          <div
            style={{
              height: '160px',
              width: '5px',
              position: 'relative',
              borderRadius: '50px',
            }}>
            <Hue
              {...this.props}
              pointer={SliderPointer}
              onChange={this.props.onChange}
              direction="vertical"
              radius="20px"
            />
          </div>
        </Grid>
        <Grid item xs={11}>
          <ProjectCardDemo
            name={this.props.name ? this.props.name : 'CopyKat'}
            avatar={this.props.avatar ? this.props.avatar : 'CK'}
            colors={
              this.props.colors
                ? this.props.colors
                : {
                    primary: 'hsl(217, 100%, 85%)',
                    secondary: 'hsl(217, 100%, 30%)',
                  }
            }
            client={this.props.client !== null ? this.props.client : 'Personal'}
            projectPath={this.props.path}
          />
        </Grid>
      </Grid>
    )
  }
}

export default CustomPicker(MyColorPicker)
