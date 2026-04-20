import{j as t}from"./iframe-BqnZkKPi.js";import{S as b}from"./ArrowRedo-seGBeKya.js";import{S as v}from"./EyeClosed-Dn-UIBlH.js";import{S as I}from"./Archive-BMrgF3IC.js";import{S as k}from"./Trash-CfRAqYTy.js";import{S as w}from"./ClockDashed-BB8orsTQ.js";import{S as l}from"./TeddyBear-Bt5RromD.js";import{i as u}from"./inboxSearchResults-O3Y82aeV.js";import{C as r}from"./ContextMenu-D7gS0wo-.js";import{L as x}from"./List-BhyjlMCS.js";import{L as d}from"./ListItem-C4Du7a0f.js";import{D as g}from"./DialogListItem-4Mb5zzQ8.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-9kVvsXig.js";import"./dialogs-Dtdp2E8o.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-f_MeSP0D.js";import"./AttachmentList-KZvi3wyy.js";import"./AttachmentLink-W-xmuoa2.js";import"./Icon-CnWjusVH.js";import"./index-DAuAfjpD.js";import"./Skeleton-1qnYSSLw.js";import"./Badge-wAZ__xuM.js";import"./Section-CvCvg2MJ.js";import"./Flex-Dfcm_wdC.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./TransmissionList-B16BWDNw.js";import"./Transmission-CIeM8KjS.js";import"./Typography-DM76If-Q.js";import"./SeenByLog-CySmm9Np.js";import"./SeenByLogButton-C_HnvNCG.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-CjT1qNUB.js";import"./Avatar-DNgE8Mou.js";import"./SeenByLogItem-CTsQrk3X.js";import"./Byline-BgerGoMP.js";import"./Divider-BztRnATF.js";import"./DialogActions-CXv92w2V.js";import"./ButtonGroupDivider-CAMhuJv0.js";import"./ChevronUp-Df6M1VDr.js";import"./ChevronDown-CoVqqo9t.js";import"./DropdownBase-BDN0b22I.js";import"./useClickOutside-CkSl4dLB.js";import"./ButtonGroup-DF4p7rG3.js";import"./SearchField-ufWryraF.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./XMark-Y2_85_oc.js";import"./FieldBase-BELBUfOz.js";import"./Label-CWCdrO7p.js";import"./index-wnzGLxld.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./Checkmark-BnBY066L.js";import"./ItemControls-CZQ275uO.js";import"./ChevronRight-DE1wtPln.js";import"./useMenu-b_BS_LFk.js";import"./InformationSquare-BrOKqXok.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-C-uznlxU.js";import"./Dropdown-hZuchDzz.js";import"./Tooltip-DKFSfnhf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Dd8yBnUU.js";import"./ItemLink-mzPSXjXe.js";import"./DialogByline-C0P7TdWw.js";import"./DialogMetadata-apy5TGyz.js";import"./DialogStatus-Cn3L39jU.js";import"./Hourglass-B6PoY_7l.js";import"./MetaProgress-DdMxZO-G.js";import"./MetaItemLabel-R3qXLeIG.js";import"./ProgressIcon-JaNXjcQ8.js";import"./MetaItem-bzLZAyd-.js";import"./MetaTimestamp-CRb1EqXA.js";import"./Paperclip-BNaRk59O.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
