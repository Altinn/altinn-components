import{a7 as t}from"./iframe-DTEeNdyk.js";import{S as b}from"./ArrowRedo-DOaPDJfD.js";import{S as v}from"./EyeClosed-p0xCxQpP.js";import{S as I}from"./Archive-DLcbgU5s.js";import{S as k}from"./Trash-AIwDZ54o.js";import{S as w}from"./ClockDashed-D1Bddm3Y.js";import{C as n}from"./ContextMenu-P3ylAoeJ.js";import{i as l}from"./inboxSearchResults-B6ed4mwv.js";import{S as u}from"./TeddyBear-D3vtUGx_.js";import{L as x}from"./List-CU3KNR3a.js";import{D as d}from"./DialogListItem-C4tr6q87.js";import{L as g}from"./ListItem-DvG_gwPx.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BMwPFGHP.js";import"./Dropdown-JTdvFb7I.js";import"./SearchField-BDcWIDhP.js";import"./MagnifyingGlass-Q_O4EtL2.js";import"./FieldBase-DjxBgQLC.js";import"./Typography-CqVDEuXx.js";import"./useHighlightedText-D9AI5Zbv.js";import"./Field-IhE5_Jjk.js";import"./Label-B-q4Hdcy.js";import"./Input-BxybDda_.js";import"./useMenu-CTNN937Q.js";import"./MenuListItem-DQq69WCb.js";import"./MenuListHeading-vODo-CbQ.js";import"./MenuItem-CveCSlsE.js";import"./ItemMedia-BWl2RL2w.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./Checkmark-BHFJ8diG.js";import"./ItemLabel-CiRGygZk.js";import"./Heading-DUvNz5de.js";import"./ItemControls-BKFWWzHw.js";import"./Badge-CRnEe1Vv.js";import"./Tooltip-Oh_JH-x_.js";import"./ChevronRight-DC0APSAK.js";import"./index-szorRtVx.js";import"./InformationSquare-W352tleo.js";import"./MenuElipsisHorizontal-D7VYWEMV.js";import"./dialogs-CHmcEGrD.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Pr5fcBw6.js";import"./AttachmentList-Bfb3Tmbq.js";import"./AttachmentLink-DMwJoaBs.js";import"./File-xb7zBzgo.js";import"./Section-D3DDcoJn.js";import"./Flex-Bg6HJ0Xq.js";import"./TransmissionList-BBNSVuBI.js";import"./Transmission-BcrchYHw.js";import"./SeenByLog-D3dysXtC.js";import"./SeenByLogButton-tOzDmE_T.js";import"./SeenByLogItem-NIfrLtbX.js";import"./Byline-ZG806qeX.js";import"./Divider-BBCxGdQr.js";import"./DialogActions-DoRj3BMd.js";import"./ButtonGroupDivider-Di14ILkk.js";import"./ChevronUp-C99xJaCq.js";import"./ChevronDown-MYe8GL0o.js";import"./DropdownBase-DMav8ckM.js";import"./useClickOutside-M_SD8DNW.js";import"./ButtonGroup-C9iOkEQW.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CqyVza2q.js";import"./ItemLink-TlorRN3x.js";import"./DialogByline-DGKpyZvx.js";import"./DialogMetadata-Cjkh3AnF.js";import"./DialogStatus-DwojozN_.js";import"./MetaItem-721PIW41.js";import"./ProgressIcon-BbcE3O7Q.js";import"./Paperclip-BadgBNh_.js";import"./Files-DXluXho_.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,zt as __namedExportsOrder,Yt as default};
