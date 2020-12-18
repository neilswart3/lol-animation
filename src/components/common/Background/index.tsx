import React from 'react';
import './styles.scss';

interface Props {
  alt: string;
  src: string;
}

interface State {
  mouseX: number;
  mouseY: number;
}

class Background extends React.Component<Props, State> {
  state = {
    mouseX: -50,
    mouseY: -50,
  };

  movePos = (pos: number): number => -50 + pos / 1000;

  handleMouseMove = (e: any): void => {
    const { clientX, clientY } = e;

    this.setState({
      mouseX: this.movePos(clientX),
      mouseY: this.movePos(clientY),
    });
  }

  render() {
    const { alt, src } = this.props;
    const { mouseX, mouseY } = this.state;
    const translate = `translate(${mouseX}%, ${mouseY}%)`;

    return (
      <div className='background'>
        <span
          className='background__wrap'
          style={{ transform: translate}}
          onMouseMove={this.handleMouseMove}>
          <img className='background__img' src={src} alt={alt} />
        </span>
      </div>
    );
  }
};

export default Background;