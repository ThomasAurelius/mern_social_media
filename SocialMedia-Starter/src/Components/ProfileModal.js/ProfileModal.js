import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal( {modalOpen, setModalOpen }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <form className='infoForm'>
         <h3>Your Info</h3>
         <div>
            <input type="text" placeholder='FirstName' className='infoInput' name='firstName' />
            <input type="text" placeholder='LastName' className='infoInput' name='lastName' />
         </div>
         <div>
            <input type="text" placeholder='Status' className='infoInput' name='status' />
            <input type="text" placeholder='WorksAt' className='infoInput' name='worksAt' />           
         </div>
         <div>
            <input type="text" placeholder='LivesIn' className='infoInput' name='livesIn' />
            <input type="text" placeholder='Country' className='infoInput' name='country' />

         </div>
         <div>
            Profile Image 
            <input type="file" className='infoInput' name='profileImg' />
            Cover Image 
            <input type="file" className='infoInput' name='coverImg' />
         </div>
         <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal