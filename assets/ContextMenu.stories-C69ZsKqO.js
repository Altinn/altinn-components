var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a5 as e}from"./iframe-BfD7syly.js";import{S as I}from"./ArrowRedo-Gws1by9s.js";import{S as k}from"./EyeClosed-D1w7G9OV.js";import{S as w}from"./Archive-Do2Bo_ug.js";import{S as B}from"./Trash-DKa5Tgj8.js";import{S as D}from"./ClockDashed-BHc3FuEH.js";import{C as a}from"./ContextMenu-4kM9ynf9.js";import{i as u}from"./inboxSearchResults-0Zmy1Z8X.js";import{S as d}from"./TeddyBear-BIvdbLb0.js";import{L as h}from"./List-ED_XuXRq.js";import{D as g}from"./DialogListItem-E95PrcjT.js";import{L as y}from"./ListItem-CBQXcdIJ.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-rxwan3om.js";import"./Dropdown-BRxpGVP6.js";import"./SearchField-CWWZLGm9.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronRight-DeJMnotn.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./useMenu-o9JsDoVb.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";import"./MenuElipsisHorizontal-BaU63blA.js";import"./dialogs-3YwHX-xf.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-7xfN8q3d.js";import"./AttachmentList-D_bS-nNX.js";import"./AttachmentLink-CmX9CiIE.js";import"./File-BJcaXPQb.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./TransmissionList-CuE5gLXy.js";import"./Transmission-DgLoev6f.js";import"./SeenByLog-CA9VoUSd.js";import"./SeenByLogItem-CcFKq2R0.js";import"./Byline-DIOXwhZW.js";import"./SeenByLogButton-DlSCPHRq.js";import"./Divider-jpHfesNJ.js";import"./DialogActions-CBh3eowA.js";import"./ButtonGroup-DFsWLoyK.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-ns7uWmGI.js";import"./ItemLink-B9RuLI2u.js";import"./DialogByline-C9Kp-jZC.js";import"./DialogMetadata-tqoljjK-.js";import"./DialogStatus-Bsq5Z7i7.js";import"./Paperclip-CM85Cu_i.js";import"./Files-DPOqKIrZ.js";import"./MetaBase-DqJZvl1u.js";import"./MetaItem-D6Wk0UsY.js";import"./ProgressIcon-CvCYovlN.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Gt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
