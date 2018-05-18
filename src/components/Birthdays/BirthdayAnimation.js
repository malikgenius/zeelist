import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './happybirthday.json';


export default class BirthdayAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isStopped: true, isPaused: false, lottiefile: '' };
    }
    

	render() {
		// const buttonStyle = {
		// 	display: 'block',
		// 	margin: '10px auto'
        // };

		const defaultOptions = {
			loop: true,
            autoplay: false,
            // animationDataLocal
			animationData
			// rendererSettings: {
			//   preserveAspectRatio: xMidYMid, slice
			// }
		};

		return (
			<div>
				<Lottie 
					options={defaultOptions}
					height={100}
					width={100}
					isStopped={this.state.isStopped}
					isPaused={this.state.isPaused}
				/>
				{/* <button
					style={buttonStyle}
					onClick={() => this.setState({ isStopped: true })}
				>
					stop
				</button>
				<button
					style={buttonStyle}
					onClick={() => this.setState({ isStopped: false })}
				>
					play
				</button>
				<button
					style={buttonStyle}
					onClick={() => this.setState({ isPaused: !this.state.isPaused })}
				>
					pause
				</button> */}
			</div>
		);
	}
}
