import{a7 as t}from"./iframe-DH0sUlof.js";import{S as b}from"./ArrowRedo-DqAiZrnf.js";import{S as v}from"./EyeClosed-BmZpfDo4.js";import{S as I}from"./Archive-VkO0gQpm.js";import{S as k}from"./Trash-Du_QY7Ml.js";import{S as w}from"./ClockDashed-ajLram_e.js";import{C as i}from"./ContextMenu-DRV4f9iJ.js";import{i as l}from"./inboxSearchResults-CSxfL0GX.js";import{S as u}from"./TeddyBear-Brm8rK4G.js";import{L as x}from"./List-Cm-mvG7i.js";import{D as d}from"./DialogListItem-BeGZ0rS9.js";import{L as g}from"./ListItem-B0cRuGOu.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-D_CHcGp2.js";import"./Dropdown-CKpYPgFT.js";import"./SearchField-CPfjDOA9.js";import"./MagnifyingGlass-C4sPwF1v.js";import"./FieldBase-DCz4GC6j.js";import"./Typography-PtbhQdVx.js";import"./useHighlightedText-DycG_gS6.js";import"./Field-CxaznmxG.js";import"./Label-Cf0ApS2G.js";import"./Input-CNoKo11u.js";import"./useMenu-CPWn58Ca.js";import"./MenuListItem-DWDx0q1Y.js";import"./MenuListHeading-DWFD_r7c.js";import"./MenuItem-BT1jodiz.js";import"./ItemMedia-BGZXzift.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Checkmark-BQvK_vH6.js";import"./ItemLabel-BN4HDeMP.js";import"./Heading-CPu50xm5.js";import"./ItemControls-BwbZayit.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./ChevronRight-CNDn15vN.js";import"./index-DEktyI50.js";import"./InformationSquare-DDlxGHn9.js";import"./MenuElipsisHorizontal-aeLtgluJ.js";import"./dialogs-BKILT7D6.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CHIiTfrh.js";import"./AttachmentList-DNuDDRmt.js";import"./AttachmentLink-B2Vg0nQN.js";import"./File-cqMoKmQT.js";import"./Section-DMcOoGW4.js";import"./Flex-D6bQl7-N.js";import"./TransmissionList-BrF-PXM7.js";import"./Transmission-DCQ3zBPm.js";import"./SeenByLog-b_1ZK6Kd.js";import"./SeenByLogButton-CtN-F9hb.js";import"./SeenByLogItem-B4lThwDI.js";import"./Byline-DXHjbIjw.js";import"./Divider-vXDeR0m7.js";import"./DialogActions-Db3izchi.js";import"./ButtonGroupDivider-BBL2yGKa.js";import"./ChevronUp-B3owS6FK.js";import"./ChevronDown-CrGho0Pn.js";import"./DropdownBase-C6oQssFv.js";import"./useClickOutside-C_qr1RpY.js";import"./ButtonGroup-0Z_3vx9e.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-1sT4ul5N.js";import"./ItemLink-D0iXhSOF.js";import"./DialogByline-DjpvFABn.js";import"./DialogMetadata-C-uhsfjI.js";import"./DialogStatus-C3LuZBIY.js";import"./MetaItem-Dm9HxOul.js";import"./ProgressIcon-B6j3X3qS.js";import"./Paperclip-B0MOorU6.js";import"./Files-BV4qwchj.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
