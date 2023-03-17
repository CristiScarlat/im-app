import React from 'react';

const LandingPage = () => {
  return (
    <div class="px-4 py-8">
      <h2 className="text-lg font-medium border-b-4 border-green-500 p-2" >Description</h2>
      <h1 className="text-m font-bold text-center p-2">Welcome to Im-App!</h1>
      <p>Im-app is a photo editing app that allows users to manipulate their own photographs to enhance their quality, appearance, or content.</p>
      <p>With this photo editing app, you can perform free functions such as cropping or you can purchase the paid subscription and perform various functions such as:resizing, rotating, adjusting color, brightness, contrast, and saturation, removing unwanted objects or blemishes, applying filters or effects, adding text or graphics, and much more.</p>
      <p>The app typically provides a user-friendly interface that includes a variety of tools and features for editing photos, such as sliders, drop-down menus, selection tools, brush tools, and layering options. Users can select a photo from their device's gallery.The app may also offer templates or presets that allow users to quickly apply a specific look or effect to their photos.</p>
      <p>Users with a paid subscription could access all editing tools and features of the app, unlocking a variety of advanced features that are not available in the free version.</p><br/>
      Available features<br/>
      1.User Accounts: The app allows users to create their own accounts and log in and log out securely.<br/>
      2.Photo Upload: Users are able to upload photos from their device.<br/>
      3.Editing Tools: The app provides a variety of editing tools such as cropping, resizing, rotating, adjusting color, brightness, contrast, and saturation, removing unwanted objects or blemishes, applying filters or effects, adding text or graphics, and much more.<br/>
      4.Presets: The app may provide a variety of pre-made filters and effects that users can apply to their photos with one click.<br/>
      5.In-App Purchases: The app offers additional features or filters that users can purchase within the app.<br/>
      6.User Privacy and Security: The app ensures the privacy and security of user data and photos, including secure login and password protection, data encryption, and other security measures to protect user privacy.<br/>
      <p className="font-bold">Please note that you can upload a maximum of 10 photos at a time. Each photo must be no larger than 5 MB in size. If you try to upload more than 10 photos or photos larger than 5 MB, the upload may fail.</p>
    </div>
  );
};

export default LandingPage;

