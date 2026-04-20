import{j as t}from"./iframe-CULgtZWU.js";import{S as b}from"./ArrowRedo-DOZZkwbG.js";import{S as v}from"./EyeClosed-92sc4keQ.js";import{S as I}from"./Archive-C10AizEf.js";import{S as k}from"./Trash-D7-j-WnU.js";import{S as w}from"./ClockDashed-BlGJT9Vj.js";import{S as l}from"./TeddyBear-Bmsa9gHy.js";import{i as u}from"./inboxSearchResults-DWQfZoI_.js";import{C as r}from"./ContextMenu-k6Bt9SEs.js";import{L as x}from"./List-BUOr4CZI.js";import{L as d}from"./ListItem-7-qwfKHS.js";import{D as g}from"./DialogListItem-C0w9abFA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-COk2q28h.js";import"./dialogs-S2s-vIFy.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-COl-IBEi.js";import"./AttachmentList-DGnWjUmj.js";import"./AttachmentLink-D_DpoSol.js";import"./Icon-G4wS9E1h.js";import"./index-BvBdYXxj.js";import"./Skeleton-B_F13Udl.js";import"./Badge-CMQ7i3tF.js";import"./Section-CJ2BqCln.js";import"./Flex-CmyJ6DZP.js";import"./Heading-QgrsV_VA.js";import"./useHighlightedText-BLw72BO7.js";import"./TransmissionList-DfWxxHbn.js";import"./Transmission-GgIFTAep.js";import"./Typography-BrN0KsEX.js";import"./SeenByLog-D8x_GpFv.js";import"./SeenByLogButton-CZdj31tZ.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-C5aSOTjU.js";import"./Avatar-DIXtsktU.js";import"./SeenByLogItem-BJCC3IMX.js";import"./Byline-DmLFgqaT.js";import"./Divider-DQal24HO.js";import"./DialogActions-DPgmq7p6.js";import"./ButtonGroupDivider-CHK1_K1s.js";import"./ChevronUp-D4lquxp4.js";import"./ChevronDown-BFG40PP5.js";import"./DropdownBase-HXGtRlZY.js";import"./useClickOutside-DLBxhGg-.js";import"./ButtonGroup-CUeGctwp.js";import"./SearchField-D5aR-gNH.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./XMark-BCb0_aBA.js";import"./FieldBase-DGffeSDz.js";import"./Label-TPhVVF1y.js";import"./index-DY3DIpTU.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuListHeading-gj1aWH_N.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./Checkmark-DEc7m9Qo.js";import"./ItemControls-RibfoZmh.js";import"./ChevronRight-Q1coQceW.js";import"./useMenu-Do_nneWd.js";import"./InformationSquare-C8Qq6I-D.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BqzfaV4g.js";import"./Dropdown-CNyPz2U1.js";import"./Tooltip-Bn52Dko6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-rU7wqAx9.js";import"./ItemLink-C0_9WLDr.js";import"./DialogByline-BmLcgeBV.js";import"./DialogMetadata-Dm97EIh1.js";import"./DialogStatus-BInDucv8.js";import"./Hourglass-ByhnMO5R.js";import"./MetaProgress-B6eX2VA5.js";import"./MetaItemLabel-BdCaMEZ4.js";import"./ProgressIcon-YNNqfk8Q.js";import"./MetaItem-DSe_LO3e.js";import"./MetaTimestamp-hyPf4emT.js";import"./Paperclip-Ca_xrm4Q.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
