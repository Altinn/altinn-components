import{j as t}from"./iframe-yBEatwQ0.js";import{S as b}from"./ArrowRedo-CLRMb3xR.js";import{S as v}from"./EyeClosed-DYLG4tja.js";import{S as I}from"./Archive-BK62d9I_.js";import{S as k}from"./Trash-1ExTWg_2.js";import{S as w}from"./ClockDashed-B7qjsId-.js";import{S as l}from"./TeddyBear-hW79S-S2.js";import{i as u}from"./inboxSearchResults-475CN7VX.js";import{C as r}from"./ContextMenu-5DItNalo.js";import{L as x}from"./List-FR3qe7-6.js";import{L as d}from"./ListItem-CFEmGYjw.js";import{D as g}from"./DialogListItem-Bq6ePfwh.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DyCIbqyR.js";import"./dialogs-BPqF3aEM.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Q1iwCTuk.js";import"./AttachmentList-BAxnrwPL.js";import"./AttachmentLink-C3Rh0tvY.js";import"./Icon-m6GSRHhZ.js";import"./index-B7J_eA84.js";import"./Skeleton-D2AOT5bt.js";import"./Badge-Bt5kdhhY.js";import"./Section-CLhotqus.js";import"./Flex-Co0GST2J.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./TransmissionList-DgU1inha.js";import"./Transmission-Ch7C2z3L.js";import"./Typography-ggurnZ72.js";import"./SeenByLog-DfEK8BuT.js";import"./SeenByLogButton-CjqOM9wk.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-Em3MhneF.js";import"./Avatar-BHAY-jNJ.js";import"./SeenByLogItem-WOKJnFl4.js";import"./Byline-DhO_oqaK.js";import"./Divider-ClYOp7SL.js";import"./DialogActions-HdI9wfl7.js";import"./ButtonGroupDivider-C6kpFR4l.js";import"./ChevronUp-BhUGhxGW.js";import"./ChevronDown-BJoDwoph.js";import"./DropdownBase-DP_WplSx.js";import"./useClickOutside-De0OSl6s.js";import"./ButtonGroup-Cw-wKcaM.js";import"./SearchField-Dq16b7ar.js";import"./MagnifyingGlass-SlzD67D9.js";import"./XMark-DRdfunCf.js";import"./FieldBase-DJNauVgJ.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./Checkmark-BOqpEP7R.js";import"./ItemControls-CsC9idfH.js";import"./ChevronRight-DNoffWLc.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DyufIMTt.js";import"./Dropdown-Dt86DnuG.js";import"./Tooltip-ncAjVCVs.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-SYKnk3zn.js";import"./ItemLink-BJ7ieZn8.js";import"./DialogByline-BBz9ywAo.js";import"./DialogMetadata-C5OfsOmK.js";import"./DialogStatus-BFP312pd.js";import"./Hourglass-CZACOXLb.js";import"./MetaProgress-VPfD9DIu.js";import"./MetaItemLabel-CyUAmw-X.js";import"./ProgressIcon-J4ruvy-X.js";import"./MetaItem-Dz2FMR8e.js";import"./MetaTimestamp-DwbMJqEK.js";import"./Paperclip-BQfOcZQR.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
