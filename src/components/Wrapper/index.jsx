// eslint-disable-next-line react/prop-types
export const Wrapper = ({ children }) => {
	return (
		<>
			<div className="bg-gray-50 bg-opacity-0 min-h-screen">
				<div className="container mx-auto p-4 md:p-8 lg:p-12">{children}</div>
			</div>
			{/* <div className=" bg-slate-50 "> {children} </div> */}
		</>
	);
};
