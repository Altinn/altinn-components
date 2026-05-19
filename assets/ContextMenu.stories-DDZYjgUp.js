import{j as t}from"./iframe-GJv3-kpe.js";import{S as b}from"./ArrowRedo--4cyv3Hn.js";import{S as v}from"./EyeClosed-B5BJPzha.js";import{S as I}from"./Archive-CmHW744W.js";import{S as k}from"./Trash-CCKQd2Hf.js";import{S as w}from"./ClockDashed-BA999rwy.js";import{S as l}from"./TeddyBear-DEU1NZyD.js";import{i as u}from"./inboxSearchResults-DlgEuuOn.js";import{C as r}from"./ContextMenu-DR011-2b.js";import{L as x}from"./List-4WWtcier.js";import{L as d}from"./ListItem-D03tI2LI.js";import{D as g}from"./DialogListItem-BqHCG-ma.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1GQrjht.js";import"./dialogs-atXPtIA2.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CKVGA8Gb.js";import"./AttachmentList-DVpFNGOx.js";import"./AttachmentLink-CD2ue1F9.js";import"./Icon-DKgAzIsH.js";import"./index-D19pPnAw.js";import"./Skeleton-dVNdeapn.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./Section-BvBlt0Cn.js";import"./Flex-CxS25VqD.js";import"./Heading-CiHDuood.js";import"./useHighlightedText-ClfYglU-.js";import"./TransmissionList-CCQYUqSu.js";import"./Transmission-BHKI8AfV.js";import"./Typography-XN79jGlV.js";import"./SeenByLog-C4Iwed7x.js";import"./SeenByLogButton-oAEcWEcJ.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./AvatarGroup-DxuzyW4n.js";import"./Avatar-CGv-fnY8.js";import"./SeenByLogItem-ClMR2wEZ.js";import"./Byline-BYpWwJw1.js";import"./Divider-CClaajVY.js";import"./DialogActions-C5ks5Vzf.js";import"./ButtonGroupDivider-DWQ-x5Lg.js";import"./ChevronUp-DpWMs-eZ.js";import"./ChevronDown-DZsHrJjp.js";import"./DropdownBase-DfJuGwRH.js";import"./useClickOutside-MnzCep85.js";import"./ButtonGroup-CkGxccE7.js";import"./SearchField-D4OrqN5V.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./XMark-D7blLnze.js";import"./FieldBase-D2hpNZAE.js";import"./Label-Bx3ShTJ6.js";import"./index-OoPsm9QB.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./Checkmark-DXLqUvZZ.js";import"./ItemControls-3C4JbZ3m.js";import"./ChevronRight-C3wqtQo3.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./InformationSquare-Crm3l9Sr.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CTnnTueZ.js";import"./Dropdown-CFn-KtHz.js";import"./MenuElipsisHorizontal-C_K0JSPh.js";import"./ItemLink-Pose4tqX.js";import"./DialogByline-eZ6ruaO1.js";import"./DialogMetadata-CwwQW8_C.js";import"./DialogStatus-DOJGfL67.js";import"./MetaItem-4LtK9iHW.js";import"./ProgressIcon-D1BZOhZ2.js";import"./Paperclip-BmatJD4L.js";import"./Files-C1kAKp57.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
