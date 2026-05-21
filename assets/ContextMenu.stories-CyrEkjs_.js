import{j as t}from"./iframe-CXxOXnma.js";import{S as b}from"./ArrowRedo-4AMvomRo.js";import{S as v}from"./EyeClosed-CjoS28zp.js";import{S as I}from"./Archive-Ckj3Uw1e.js";import{S as k}from"./Trash-BwBqKSjv.js";import{S as w}from"./ClockDashed-BGkl1v-H.js";import{S as l}from"./TeddyBear-Cy9OWA3i.js";import{i as u}from"./inboxSearchResults-D30xhOi6.js";import{C as r}from"./ContextMenu-DWu5Hmy2.js";import{L as x}from"./List-CWN0grZu.js";import{L as d}from"./ListItem-C7pcgmaV.js";import{D as g}from"./DialogListItem-B12Kikmn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CYy4MNIP.js";import"./dialogs-DWxydab4.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CAtPU6Ea.js";import"./AttachmentList-1Trnv17R.js";import"./AttachmentLink-D5Q6qNWr.js";import"./Icon-CyU2k-nr.js";import"./index-DvzmMrBu.js";import"./Skeleton-DaZzKoDP.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./tooltip-F-8CLWbq.js";import"./Section-BI582Rxy.js";import"./Flex-Cdw8i_ge.js";import"./Heading-CD_Q6pfI.js";import"./useHighlightedText-Cggf4nMP.js";import"./TransmissionList-D6t7BlZ7.js";import"./Transmission-u2IqlSsi.js";import"./Typography-4yj_ylkx.js";import"./SeenByLog-BGfqYQ4c.js";import"./SeenByLogButton-BK6Y5DG3.js";import"./Button-Dot-dF6F.js";import"./AvatarGroup-DdK_Ls54.js";import"./Avatar-De_JFqYW.js";import"./SeenByLogItem-nGELMoBo.js";import"./Byline-BkcZgi9W.js";import"./Divider-C-Mk1MAd.js";import"./DialogActions-DRJnXpe0.js";import"./ButtonGroupDivider-ChU-bpp6.js";import"./ChevronUp-C7KI3ypM.js";import"./ChevronDown-BI53cl-V.js";import"./DropdownBase-DxfReKTd.js";import"./useClickOutside-BYI-Vn44.js";import"./ButtonGroup-DA7guRJP.js";import"./SearchField-Bi4ovUnL.js";import"./MagnifyingGlass-D50FbQFC.js";import"./XMark-DvGwYctt.js";import"./FieldBase-DpHGffp6.js";import"./Label-CsbjAOhP.js";import"./Input-jSu8pVt5.js";import"./MenuListItem-Coun_kyi.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./Checkmark-CEwGjLXr.js";import"./ItemControls-D969--fk.js";import"./ChevronRight-fDr-lddl.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DJy2cdVV.js";import"./Dropdown-Dq-7A4eI.js";import"./MenuElipsisHorizontal-Bm1EICSF.js";import"./ItemLink-pXD4ggni.js";import"./DialogByline-CX71eIKd.js";import"./DialogMetadata-CFSpRRDF.js";import"./DialogStatus-RTrwaxy_.js";import"./MetaItem-BJUzccXa.js";import"./ProgressIcon-BlKBadtJ.js";import"./Paperclip-CPFBLELT.js";import"./Files-ClWPMzFl.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Nt as __namedExportsOrder,Jt as default};
