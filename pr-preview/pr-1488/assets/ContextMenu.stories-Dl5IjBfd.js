var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-Cb83cNHz.js";import{S as I}from"./ArrowRedo-DIbPoqeA.js";import{S as k}from"./EyeClosed-BkSVB78V.js";import{S as w}from"./Archive-DAtzml59.js";import{S as B}from"./Trash-lsGNewil.js";import{S as D}from"./ClockDashed-CdLFcCzb.js";import{C as a}from"./ContextMenu-BmqCqerS.js";import{i as u}from"./inboxSearchResults-DkAMaIsN.js";import{S as d}from"./TeddyBear-BqbKNvD5.js";import{L as h}from"./List-_fktTtX7.js";import{D as g}from"./DialogListItem-Bz6in-ht.js";import{L as y}from"./ListItem-DCX5xInW.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-Q85VC5Dx.js";import"./Dropdown-ANdQRx3c.js";import"./SearchField-HWu0obAx.js";import"./MagnifyingGlass-C02McN1l.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./ItemLabel-BEqC8Tjb.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronRight-C-6CVVq7.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";import"./dialogs-zcr8H4G1.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DTTKDbLD.js";import"./AttachmentList-DDpcC4N-.js";import"./File-BKTqdUDP.js";import"./Section-ClBUDaq7.js";import"./Flex-mAUGJKsG.js";import"./TransmissionList-D1y8Okr1.js";import"./Transmission-Cr5kooML.js";import"./SeenByLog-CmW0n2M5.js";import"./SeenByLogItem-B9vzeZs3.js";import"./Byline-CgRs6b_9.js";import"./SeenByLogButton-c7Gxey98.js";import"./Divider-79FwmztS.js";import"./DialogActions-DqjURT2K.js";import"./ButtonGroup-BwzWu-pA.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-kQ84sUK4.js";import"./ItemLink-BQ17I7eJ.js";import"./DialogByline-n0n8giDv.js";import"./DialogMetadata-BiY6VXWS.js";import"./DialogStatus-HalUyppN.js";import"./Paperclip-DIwapK62.js";import"./Files-BO2emw-8.js";import"./Checkmark-CNvtSrOy.js";import"./MetaBase-BAYkJaR-.js";import"./MetaItem-B1pUVBVL.js";import"./ProgressIcon-Ds_r59T8.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,zt as __namedExportsOrder,Yt as default};
