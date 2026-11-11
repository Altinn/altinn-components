var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CJbVApVd.js";import{u as j}from"./useProfileLayout-CjhJssMU.js";import{u as g,B as x}from"./useBookmarks-DbNXkzpZ.js";import{L as k}from"./Layout-D4_cnTw3.js";import{P as b}from"./PageBase-D6K7wqGL.js";import{H as m}from"./Heading-DPlNKJG2.js";import{T as I}from"./Toolbar-Bragk--_.js";import{B as h}from"./BookmarkModal-CPxCk1Hp.js";import{u as C}from"./useInboxLayout-ysY-4od8.js";import{u as y}from"./useAccountMenu-C4PrfCi7.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BaKFRi7I.js";import"./Bell-UFatCXFf.js";import"./Bookmark-C9de6O7D.js";import"./ClockDashed-D1H_Un6v.js";import"./globalMenu-16sT0Jb1.js";import"./PersonCircle-CGUoPQfj.js";import"./Buildings2-CTG7RS-R.js";import"./InboxFill-C0zkOxXf.js";import"./MenuGrid-DCB-knrm.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CfKujgt8.js";import"./Trash-TofRm-_Y.js";import"./useLayout-BP48tN3_.js";import"./useLocale-CCKwctp8.js";import"./header-Cqi5jk-A.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Le6NyqAV.js";import"./BookmarkSettingsItem-DX3dZu3Z.js";import"./QueryLabel-nefARRkF.js";import"./Plus-C_JJ1fS4.js";import"./SettingsItemBase-FDuHQDDt.js";import"./ItemMedia-zelbGl6j.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./ChevronUp-Dnc1erKd.js";import"./ChevronDown-CUSqX3Qn.js";import"./ChevronRight-27VbzC_5.js";import"./ItemBase-CW_AfMRn.js";import"./ItemLink-DxGfrHe_.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./Typography-YiefWcUe.js";import"./useHighlightedText-ClD__BkG.js";import"./ContextMenu-DrorVqxf.js";import"./useDropdownMenuController-B6bebHA9.js";import"./Dropdown-F7ryxq5F.js";import"./SearchField-v7apZWbj.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuListDivider-DHbKRw1S.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemLabel-BQOKZEUY.js";import"./FieldBase-DPozPxXp.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./InformationSquare-COAmcV_p.js";import"./Pencil-CmX4lpax.js";import"./SkipLink-wPOw8Ojx.js";import"./CookieBanner-BhX6ha7Q.js";import"./Link-Bh7qdzfq.js";import"./Banner-DckGEEVl.js";import"./GlobalHeader-B2VMgRyO.js";import"./useIsDesktop-B-cEhfIa.js";import"./GlobalAccountButton-DLHTd1Ta.js";import"./Enter-CLpxMQoO.js";import"./GlobalMenuButton-DqPwGFaS.js";import"./MenuHamburger-Drn1nU86.js";import"./AccountSelector-DnNjsOoN.js";import"./Switch-DgDB3yiy.js";import"./AccountMenu-CaMcu7Ms.js";import"./GlobalMenu-B28H1ehD.js";import"./Checkmark-B9iR0FRr.js";import"./ArrowUndo-s8spIZZt.js";import"./Globe-DZKqbOWc.js";import"./BreadcrumbsLink-XcBs2lYi.js";import"./ArrowRight-Bj8RpLKd.js";import"./Footer-DawQ2f6l.js";import"./Flex-DQBhfYN9.js";import"./ButtonGroup-Ban15m4A.js";import"./ButtonGroupDivider-BEoSbrb-.js";import"./ChevronUpDown-CYzCA8Zj.js";import"./ToolbarMenu-BnWSZSo7.js";import"./ToolbarSearch-BOc9sO_2.js";import"./SettingsModal-BrOxt4-B.js";import"./ModalBody-CibPyY7R.js";import"./Section-senxxBaK.js";import"./ButtonIcon-CXdZoXpr.js";import"./ButtonLabel-DVwE6I-4.js";import"./TextField-C0Epio0R.js";import"./inboxMenu-gLGUSYYt.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
