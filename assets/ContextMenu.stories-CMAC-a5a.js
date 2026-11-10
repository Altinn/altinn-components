var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-CfESZwGq.js";import{S as I}from"./ArrowRedo-Bzet3LYb.js";import{S as k}from"./EyeClosed-CFsuNn0W.js";import{S as w}from"./Archive-g44wWaqP.js";import{S as B}from"./Trash-B8iqDuUh.js";import{S as D}from"./ClockDashed-CTNpkhjM.js";import{C as a}from"./ContextMenu-Bnd9vrc8.js";import{i as u}from"./inboxSearchResults-C_4flJXP.js";import{S as d}from"./TeddyBear-BHhXZqRr.js";import{L as h}from"./List-DjTHwgHu.js";import{D as g}from"./DialogListItem-GVRRKG9Y.js";import{L as y}from"./ListItem-B2b15rfK.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-COgknKdL.js";import"./Dropdown-BfcDJKeS.js";import"./SearchField-Dzjcb6Jc.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./MenuListItem-DFvxTJo7.js";import"./MenuListDivider-PhbjEgIJ.js";import"./MenuItem-DfUUgYTt.js";import"./CheckboxUncheckedIcon-8mxNE8Kh.js";import"./RadioUncheckedIcon-BTuDB-oi.js";import"./ItemMedia-av47GhhR.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./ItemLabel-Bf911ckJ.js";import"./Heading-BMVjBYv7.js";import"./useHighlightedText-DZWCzlXV.js";import"./ItemControls-m0GxRmTW.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./ChevronRight-B74pzmXz.js";import"./FieldBase-B5R0NBwO.js";import"./Typography-DtLS48Hu.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";import"./useMenu-DCL6y2xK.js";import"./InformationSquare-BWZxY-Ir.js";import"./dialogs-CPNQ14x1.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CS9VRhQt.js";import"./AttachmentList-DKb4W3nU.js";import"./File-Cg-C5w4a.js";import"./Section-CXHovEsj.js";import"./Flex-DCvAlmz5.js";import"./TransmissionList-DnGcmjHe.js";import"./Transmission-BrTjF0mx.js";import"./SeenByLog-CTQeoP78.js";import"./SeenByLogItem-CMb7gnFz.js";import"./Byline-D7K69XJQ.js";import"./SeenByLogButton-RNSLcczi.js";import"./Divider-DHEguHG2.js";import"./DialogActions-ktrQvLkK.js";import"./ButtonGroup-B_R5r7Ky.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-nh7R-0mK.js";import"./ItemLink-HBd6VQB6.js";import"./DialogByline-D8KWT4KU.js";import"./DialogMetadata-BUuG1ymx.js";import"./DialogStatus-Cwq1mx7J.js";import"./Paperclip-C-DJh7Uj.js";import"./Files-nUboGX_2.js";import"./Checkmark-B9ugWUTA.js";import"./MetaBase-fwyZGg3N.js";import"./MetaItem-CCuKfq-_.js";import"./ProgressIcon-BLyDJn_2.js";import"./ChevronUp-AGjLHyT-.js";import"./ChevronDown-BeusJatl.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
