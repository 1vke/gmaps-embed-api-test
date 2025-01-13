import "./leafletMapStyles.scss";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {useEffect, useState} from "react";

const OFFSET_DELAY = 1000;
const OFFSET_AMOUNT = .0005;

const LeafletMap = () => {
    const busCoords: [number, number] = [40.20025, -85.3983];
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((offset + 1) % 10);
        }, OFFSET_DELAY);

        return () => clearInterval(interval);
    }, [offset]);


    return (
        <MapContainer center={busCoords} zoom={16} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[busCoords[0], busCoords[1] + offset * OFFSET_AMOUNT]}>
                <Popup>
                    This is a popup
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafletMap;