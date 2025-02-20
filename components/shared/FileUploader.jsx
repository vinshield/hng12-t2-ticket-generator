import { CloudDownload } from "lucide-react";
import React from "react";

const FileUploader = () => {
	return (
		<div>
			<div className='info-card p-6'>
				<p className='mb-4'>Upload Profile Photo</p>
				<div className='w-full m-auto aspect-square rounded-[32px] border-4 border-[#24A0B5] flex justify-center flex-col p-3 gap-4 items-center bg-[#24A0B5] bg-opacity-50'>
					<CloudDownload size={32} />
					<p className='text-center'>Drag & drop or click to upload</p>
				</div>
			</div>
		</div>
	);
};

export default FileUploader;
