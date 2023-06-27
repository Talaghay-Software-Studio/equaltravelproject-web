import equalTravelLogo from '../../assets/img/equal-travel-white-transparent.png'

export default function AppLogo(props){

    return(
        <div>
            <img src={equalTravelLogo} height={props.logoHeight} className="logo" alt="Equal Travel logo" />
        </div>
    )
}