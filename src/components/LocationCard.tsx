interface Props {
  locationName: string;
  country: string;
}

function LocationCard({ locationName, country }: Props) {
  return (
    <div>
      <h2>
        {locationName}, {country}
      </h2>
    </div>
  );
}

export default LocationCard;
