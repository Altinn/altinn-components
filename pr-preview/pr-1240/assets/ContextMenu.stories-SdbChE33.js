import{a7 as t}from"./iframe-C3-39QZn.js";import{S as b}from"./ArrowRedo-DG6JiOfk.js";import{S as v}from"./EyeClosed-DPILsftP.js";import{S as I}from"./Archive-B4YJqA48.js";import{S as k}from"./Trash-Daess6ZY.js";import{S as w}from"./ClockDashed-BHfN0U-Y.js";import{C as i}from"./ContextMenu-C49fggZX.js";import{i as l}from"./inboxSearchResults-DmcWJumc.js";import{S as u}from"./TeddyBear-CyYmC5VC.js";import{L as x}from"./List-C0B2zVng.js";import{D as d}from"./DialogListItem-D7mumrKE.js";import{L as g}from"./ListItem-BhGiT6gr.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Ch-gS0ya.js";import"./Dropdown-DwcIrTVC.js";import"./SearchField-BHCumu4V.js";import"./MagnifyingGlass-W4-YHK47.js";import"./FieldBase-CuUVQ-X3.js";import"./Typography-DzSxU3qn.js";import"./useHighlightedText--t_r6ff3.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./Input-Ck9X-Ajd.js";import"./useMenu-PdCJBcPZ.js";import"./MenuListItem-C_zHoz8h.js";import"./MenuListHeading-BABwYJ-w.js";import"./MenuItem-_nHd0yat.js";import"./ItemMedia-Dvk-rH5V.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./Checkmark-DcGYSDVC.js";import"./ItemLabel-EUoHzQAm.js";import"./Heading-B2KBSzP-.js";import"./ItemControls-CvvFc83j.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./ChevronRight-C8E9q9OI.js";import"./index-DsMJ5_O1.js";import"./InformationSquare-CikWmUv2.js";import"./MenuElipsisHorizontal-BDwvxdWn.js";import"./dialogs-H3Viwc5_.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DvzD-FU2.js";import"./AttachmentList-CIsjNSAf.js";import"./AttachmentLink-BA_P0cdw.js";import"./File-D2pTWHdc.js";import"./Section-B5UTl4N5.js";import"./Flex-cOQ4YkiH.js";import"./TransmissionList-BvWvRllD.js";import"./Transmission-DEFI6ysY.js";import"./SeenByLog-CfAi7R1v.js";import"./SeenByLogButton-C2U_vdVT.js";import"./SeenByLogItem-BIgaFvdz.js";import"./Byline-B1hqh-Dc.js";import"./Divider-DEcFljaK.js";import"./DialogActions-YfoCSImH.js";import"./ButtonGroupDivider-D5yx3I3q.js";import"./ChevronUp-CNTxwGY1.js";import"./ChevronDown-C_O64CkH.js";import"./DropdownBase-DxgM_B9U.js";import"./useClickOutside-noKtYPCf.js";import"./ButtonGroup-BudWnE7m.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BAbRxOK9.js";import"./ItemLink-B72RuPPU.js";import"./DialogByline-Czr1MLEf.js";import"./DialogMetadata-BzffzYLi.js";import"./DialogStatus-CiPC31jv.js";import"./MetaItem-M2VsedRi.js";import"./ProgressIcon-jbwt389r.js";import"./Paperclip-B7l4T1Kq.js";import"./Files-dlvyHk1P.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
