import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { YMaps, Map, Circle } from '@pbe/react-yandex-maps';
import { Input, Slider } from 'antd';

interface MapInputValue {
  radius: number;
  latitude: number;
  longitude: number;
}

interface MapInputInterface {
  value?: MapInputValue;
  onChange?: (val: MapInputValue) => void;
}
const MapInput = (props: MapInputInterface) => {
  const ref: any = React.createRef();
  const center = [61.787394, 34.347505];
  const [radius, setRadius] = useState(props?.value?.radius || 100000);
  const [latitude, setLatitude] = useState<number>(
    props?.value?.latitude || center[0],
  );
  const [longitude, setLongitude] = useState<number>(
    props?.value?.longitude || center[1],
  );

  useEffect(() => {
    props.onChange({
      latitude,
      longitude,
      radius,
    });
  }, [latitude, longitude, radius]);
  useEffect(() => {
    if (ref?.current?.geometry) {
      ref.current.geometry.events.add('change', (e) => {
        const newCoords = e.get('newCoordinates');
        newCoords?.[0] && setLatitude(newCoords?.[0]);
        newCoords?.[1] && setLongitude(newCoords?.[1]);
      });
    }
  }, [ref]);
  return (
    <>
      <YMaps>
        <div>
          <Map options={{}} defaultState={{ center, zoom: 9 }}>
            <Circle
              instanceRef={ref}
              geometry={[
                [latitude || center[0], longitude || center[1]],
                radius,
              ]}
              options={{
                draggable: true,
                fillColor: '#DB709377',
                strokeColor: '#990066',
                strokeOpacity: 0.8,
                strokeWidth: 5,
              }}
            />
          </Map>
        </div>
      </YMaps>
      <Slider
        onChange={(e) => {
          setRadius(e);
        }}
        defaultValue={props?.value?.radius || 10000}
        value={radius}
        max={10000}
        min={0}
        marks={{
          0: '0',
          10000: '10000',
        }}
      />
      <Input disabled={true} name="latitude" value={props?.value?.latitude} />
      <Input disabled={true} name="longitude" value={props?.value?.longitude} />
    </>
  );
};

export default React.memo(MapInput);
