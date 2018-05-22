import React from 'react';
import Lottie from 'react-lottie';
// import js-file-download from 'js-file-download';
import * as animationData from './zeenahloading.json';
// import * as animationDataLocal from './zeenahlogo.json';

export default class LoadingAnimationLottie extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isStopped: false, isPaused: false, lottiefile: '' };
    }
    
    // componentDidMount = () => {
    //     const FileDownload = require('js-file-download');
    //     firebase.storage().ref('animations/').child('empty_list.json').getDownloadURL()
    //         .then((url) => {
    //             FileDownload(url, 'animation.json');
    //         });
    // }

	render() {
		// const buttonStyle = {
		// 	display: 'block',
		// 	margin: '10px auto'
        // };
        // const animationData = {this.state.lottiefile}

		const defaultOptions = {
			loop: true,
            autoplay: true,
            // animationDataLocal
			animationData
			// rendererSettings: {
			//   preserveAspectRatio: xMidYMid slice
			// }
		};

		return (
			<div>
				<Lottie
					options={defaultOptions}
					height={200}
					width={200}
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
