const Floor = () => {
  return (
    <>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.005, 0]}
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#777777" />
      </mesh>
    </>
  );
};

export default Floor;
