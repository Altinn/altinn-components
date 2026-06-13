import{a7 as t}from"./iframe-CTaNoWWa.js";import{S as b}from"./ArrowRedo-EgiJmth-.js";import{S as v}from"./EyeClosed-DltD1nG9.js";import{S as I}from"./Archive-UJ9hFBtH.js";import{S as k}from"./Trash-B7D9F4yI.js";import{S as w}from"./ClockDashed-CbT8_7l3.js";import{C as n}from"./ContextMenu-DJ_K9wJs.js";import{i as l}from"./inboxSearchResults-CxToUNKX.js";import{S as u}from"./TeddyBear-SjB12Uei.js";import{L as x}from"./List-BWBH_N2R.js";import{D as d}from"./DialogListItem-CY-Y1txB.js";import{L as g}from"./ListItem-bITmjQKl.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BJZIrHL7.js";import"./Dropdown-CgaJWkpX.js";import"./SearchField-ybvTeITK.js";import"./MagnifyingGlass-DGspW_mh.js";import"./FieldBase-CgdWEw7I.js";import"./Typography-CN45st3d.js";import"./useHighlightedText-B1ZF3HFO.js";import"./Field-BInLTKbx.js";import"./Label-yw6hdd5b.js";import"./Input-CTz4y9O9.js";import"./useMenu-CpFtChbI.js";import"./MenuListItem-DQ_58J0s.js";import"./MenuListDivider-CkCLDcCQ.js";import"./MenuListHeading-Gc6ll2v1.js";import"./MenuItem-CimdO91p.js";import"./ItemMedia-wY5sofun.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Checkmark-BhX8-1Sr.js";import"./ItemLabel-BrNBIEws.js";import"./Heading-C1mUjHlh.js";import"./ItemControls-DMuz6Cbk.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./ChevronRight-CohjqIQG.js";import"./index-CftdW1E-.js";import"./InformationSquare-BkCx_Sj6.js";import"./MenuElipsisHorizontal-eegx-ga-.js";import"./dialogs-BhSGAxBA.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CCxsUtbm.js";import"./AttachmentList-B2PNdYav.js";import"./AttachmentLink-Dk06xEvp.js";import"./File-O5Fd_RSU.js";import"./Section-Gj9AU1UQ.js";import"./Flex-CN3B00B1.js";import"./TransmissionList-BW6vQleI.js";import"./Transmission-DDFvRzii.js";import"./SeenByLog-CFd9w-wN.js";import"./SeenByLogButton-BPIKG2E6.js";import"./SeenByLogItem-BqwAJ68P.js";import"./Byline-D8B8SQTU.js";import"./Divider-DGpuBlLt.js";import"./DialogActions-DvM_NwYN.js";import"./ButtonGroupDivider-BHmhovsW.js";import"./ChevronUp-0PuCoJui.js";import"./ChevronDown-BHW7W_eE.js";import"./DropdownBase-CaQqbmMb.js";import"./useClickOutside-s1vwg5Zo.js";import"./ButtonGroup-DcAUocsW.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DKpUUlFO.js";import"./ItemLink-B-O_qCzl.js";import"./DialogByline-Da-ko29T.js";import"./DialogMetadata-DWK3lmig.js";import"./DialogStatus-B32zzoyh.js";import"./MetaItem-BKgFGFvS.js";import"./ProgressIcon-CMXATo7q.js";import"./Paperclip-BfYQtNin.js";import"./Files-BTW7IcHM.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
