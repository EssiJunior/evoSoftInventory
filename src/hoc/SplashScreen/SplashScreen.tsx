// REACT IMPORTS
import React, { Component } from 'react';

// COMPONENTS
import Loader from '../../components/Loader/Loader'

// STYLE
import './splash_screen.scss'

// ASSETS
import logo from "../../assets/logo_text.png"

// INTERFACES

interface WithSplashScreenProps {
    [key: string]: any;
}

const SplashContent = () => {
    return (
        <div className='splash'>
            <img src={logo} alt="logo" loading='lazy' />
            <h2>Manage daily product inventory easily</h2>
            <Loader />
        </div>
    )
}

export default function SplashScreen(WrappedComponent: React.ComponentType<WithSplashScreenProps>) {
    return class extends Component<WithSplashScreenProps, { loading: boolean }> {
        constructor(props: WithSplashScreenProps) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 6500);
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashContent();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}

