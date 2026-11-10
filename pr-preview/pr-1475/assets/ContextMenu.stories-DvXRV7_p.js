var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-Yc5vADWD.js";import{S as I}from"./ArrowRedo-CyAZ7dPF.js";import{S as k}from"./EyeClosed-CDEoj0S2.js";import{S as w}from"./Archive-52BKtGhP.js";import{S as B}from"./Trash-DtaM_GNe.js";import{S as D}from"./ClockDashed-CfxZLWwP.js";import{C as a}from"./ContextMenu-TzZVtjIn.js";import{i as u}from"./inboxSearchResults-DSmkj4iQ.js";import{S as d}from"./TeddyBear-CIe-fan4.js";import{L as h}from"./List-CIhxK0fT.js";import{D as g}from"./DialogListItem-3vmyFOD1.js";import{L as y}from"./ListItem-p9NlHhpX.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CfW-t4Vt.js";import"./Dropdown-ClwEgS76.js";import"./SearchField-DuQI2WUG.js";import"./MagnifyingGlass-D24TEFQh.js";import"./MenuListItem-D_xInwm_.js";import"./MenuListDivider-CBT6dc8U.js";import"./MenuItem-Do_eZo-E.js";import"./CheckboxUncheckedIcon-BTRLnzsL.js";import"./RadioUncheckedIcon-B5Tym566.js";import"./ItemMedia-93ge468N.js";import"./Avatar-B1293ug9.js";import"./AvatarGroup-b9E5cL-B.js";import"./ItemLabel-CEwOeVMD.js";import"./Heading-DEfYMi8I.js";import"./useHighlightedText-DPM1PtgE.js";import"./ItemControls-CBx0Fvi9.js";import"./Badge-B7caOYrZ.js";import"./Tooltip-ClWq0FMC.js";import"./ChevronRight-BvgS2wwu.js";import"./FieldBase-Dm91Yu7W.js";import"./Typography-BbQNKF3N.js";import"./Field-CKipP2ZI.js";import"./Label-Coc0T7Cr.js";import"./Input-XB5O9fra.js";import"./useMenu-CxtnSdnP.js";import"./InformationSquare-TRKWejmi.js";import"./dialogs-CH8XPbBw.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DAm04kn5.js";import"./AttachmentList-DnPAsuTU.js";import"./File-CSgcZ8pS.js";import"./Section-CEOcJou8.js";import"./Flex-B3cYS6HF.js";import"./TransmissionList-Tr6ECz3L.js";import"./Transmission-DmtheIE6.js";import"./SeenByLog-DuliCpmn.js";import"./SeenByLogItem-BL8X8Zet.js";import"./Byline-CRSkwqC3.js";import"./SeenByLogButton-DzxI2NZD.js";import"./Divider-KmVnp2I8.js";import"./DialogActions-BhGbMD9Y.js";import"./ButtonGroup-B5kerLtb.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Bnlsc0Vh.js";import"./ItemLink-AwrKKBO4.js";import"./DialogByline-CNNLbbvh.js";import"./DialogMetadata-CfW2yzXL.js";import"./DialogStatus-DWI8FLhp.js";import"./Paperclip-DxzI5Sjf.js";import"./Files-C4_ju5Sm.js";import"./Checkmark-Bfjel_6l.js";import"./MetaBase-B0bus71f.js";import"./MetaItem-CkLkD9y8.js";import"./ProgressIcon-CTVj33SH.js";import"./ChevronUp-CHIwOCup.js";import"./ChevronDown-DOVICByK.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
