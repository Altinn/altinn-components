var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-CmRPDbOf.js";import{S as I}from"./ArrowRedo-BIQ5CKFB.js";import{S as k}from"./EyeClosed-sYElVV0f.js";import{S as w}from"./Archive-Czt8xJzv.js";import{S as B}from"./Trash-BLtAnUoG.js";import{S as D}from"./ClockDashed-DoZCcm3C.js";import{C as a}from"./ContextMenu-Cbf9vWrX.js";import{i as u}from"./inboxSearchResults-sDRGuTqa.js";import{S as d}from"./TeddyBear-uIye0GTc.js";import{L as h}from"./List-Dcrfn7hV.js";import{D as g}from"./DialogListItem-idco8z04.js";import{L as y}from"./ListItem-DMNi5z0u.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-D9mdepVV.js";import"./Dropdown-B1dfaL3E.js";import"./SearchField-DPxFOcjN.js";import"./MagnifyingGlass-CwhdRafK.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemMedia-BANum1kS.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./ItemLabel-S9If7Ew0.js";import"./Heading-Bga8Ehqe.js";import"./useHighlightedText-DjvNujh0.js";import"./ItemControls-CjzJ0cx0.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./ChevronRight-DUgz5ktQ.js";import"./FieldBase-uTfpYKlO.js";import"./Typography-3Ni-pGxm.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Input-SsfERmB5.js";import"./useMenu-Dthlol8g.js";import"./InformationSquare-CWm2kkCA.js";import"./dialogs-IS3woWwX.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BcOjTiMC.js";import"./AttachmentList-NJKoKt_s.js";import"./File-k9vroheU.js";import"./Section-BoLEShm2.js";import"./Flex-CHIj3aXb.js";import"./TransmissionList-BjhtKOkM.js";import"./Transmission-DTYazgUw.js";import"./SeenByLog-DQiCjdfQ.js";import"./SeenByLogItem-D_2xME7m.js";import"./Byline-Br9s5xmQ.js";import"./SeenByLogButton-BGb_9FrL.js";import"./Divider-jsMRGXy0.js";import"./DialogActions-DWAIrwkL.js";import"./ButtonGroup-Cg6ykbdg.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BsdSxlJi.js";import"./ItemLink-BbfZb6VU.js";import"./DialogByline-CAhlS_Yi.js";import"./DialogMetadata-d_AeR44J.js";import"./DialogStatus-DvAp8hvP.js";import"./Paperclip-DIdgjote.js";import"./Files-CpMc5dKU.js";import"./Checkmark-BU8vtpH6.js";import"./MetaBase-Bvo_h3gK.js";import"./MetaItem-DgtpDwyG.js";import"./ProgressIcon-DAqjWNYC.js";import"./ChevronUp-Du7zJIj-.js";import"./ChevronDown-DDaXyD9m.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
