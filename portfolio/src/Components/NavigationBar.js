import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useTransition, animated} from 'react-spring'
import NavigationMenu from "./NavigationMenu";
import useWindowSize from "../Hooks/WindowSize";

function NavigationBar() {

    const size = useWindowSize();

    const [hidden, setHidden] = useState(false);

    const [showMenu, setShowMenu] = useState(false);
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    useEffect(() => {
        if (size.width < 1280)
            setHidden(true);
        else
            setHidden(false);
    }, [size.width])

    if(hidden) {

        return (
            <nav>
                <span className="text-xl cursor-pointer md:text-4xl lg:text-5xl">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </span>
                {
                    maskTransitions.map(({item, key, props}) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className="bg-black-t-50 top-0 left-0 w-full min-h-screen z-50"
                            onClick={() => setShowMenu(false)}
                        >️
                        </animated.div>)
                }
                {
                    menuTransitions.map(({item, key, props}) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className="fixed bg-color-primary-2 top-0 left-0 w-3/5 h-full z-50 shadow p-3 text-white"
                        >
                            <NavigationMenu
                                closeMenu={() => setShowMenu(false)}
                            />

                        </animated.div>
                    )
                }
            </nav>
        );
    } else {
        return (
          <NavigationMenu/>
        );
    }
}

export default NavigationBar;