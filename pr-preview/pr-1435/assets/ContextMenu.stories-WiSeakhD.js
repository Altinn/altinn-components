var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-uBWg0zsp.js";import{S as I}from"./ArrowRedo-B8w7jeid.js";import{S as k}from"./EyeClosed-CNrGAJ_7.js";import{S as w}from"./Archive-CUWUpWB2.js";import{S as B}from"./Trash-C1BuSK8u.js";import{S as D}from"./ClockDashed-DJcBaFOk.js";import{C as a}from"./ContextMenu-BmGKPgKH.js";import{i as u}from"./inboxSearchResults-C-54Hdfr.js";import{S as d}from"./TeddyBear-CrXtcalO.js";import{L as h}from"./List-CPfTuEIO.js";import{D as g}from"./DialogListItem-C7uYXWrl.js";import{L as y}from"./ListItem-DZSp_PZG.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-Bo6Cy3yx.js";import"./Dropdown-xncsPjss.js";import"./SearchField-CiFTLXk1.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./FieldBase-Bze69qIO.js";import"./Typography-nYxE8-3g.js";import"./useHighlightedText-SyZl2q2q.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./useMenu-CXJ-cLkO.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./ItemMedia-DYHGe3r3.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./Heading-B2wyz-tz.js";import"./ItemControls-D7ku9ps1.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ChevronRight-Ci7fQup2.js";import"./InformationSquare-D-wVMUGu.js";import"./MenuElipsisHorizontal-PnMCFiJK.js";import"./dialogs-DIp75Oal.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C52uL1k8.js";import"./AttachmentList-AvypWfxY.js";import"./AttachmentLink-06aMqPwJ.js";import"./File-RxoSb9Tf.js";import"./Section-B5mZZWwm.js";import"./Flex-DndVrHjj.js";import"./TransmissionList-e_SX2nKg.js";import"./Transmission-CmI6oaLA.js";import"./SeenByLog-ByNemD-0.js";import"./SeenByLogItem-Dut_1a95.js";import"./Byline-9oMI9IrU.js";import"./SeenByLogButton-BPkFIVeQ.js";import"./Divider-CsxBHb0r.js";import"./DialogActions-BH-2nhqi.js";import"./ButtonGroup-C6ZuBQRD.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DJIQNQsT.js";import"./ItemLink-DAu62COd.js";import"./DialogByline-kU0BDDX2.js";import"./DialogMetadata-Bwuiwv10.js";import"./DialogStatus-CXBSuXdu.js";import"./Paperclip-Dmdj1641.js";import"./Files-DHfgMFEx.js";import"./MetaBase-lDpoawPu.js";import"./MetaItem-Blzlabs9.js";import"./ProgressIcon--RhLbDa_.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
